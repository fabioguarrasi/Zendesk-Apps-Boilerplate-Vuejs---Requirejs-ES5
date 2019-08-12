# Zendesk Apps Boilerplate (Require + Vuejs + ES5)
The scope of this project is a to have a ready to go app boilerplate to start building zendesk apps using:

* [RequireJs (as we don't bundle any javascript code, we can't use webpack)](https://requirejs.org/)

* [Vuejs](https://vuejs.org/v2/guide/)

* [Vuex](https://vuex.vuejs.org/)

#
Below I'll describe some customization I've included in the boilerplate and how/when to use them.

### [manifest.json](##manifest.json)
### [assets/iframe.html](##assets/iframe.html)
### [assets/main.js](##assets/main.js)
### [assets/src/store/store.js](##assets/src/store/store.js)
### [assets/src/libs/ZDClient.js](##assets/src/libs/ZDClient.js)


## **manifest.json**

### IS_PRODUCTION Parameter

Looking at the `manifest.json` file you may notice the presence of the paramenter
`IS_PRODUCTION`. This hidden parameter will help you when you work `secure` settings.

```json
{
  "name": "IS_PRODUCTION",
  "type": "hidden",
  "default": "true"
}

```

When you work with `secure` settings, you should set in your ajax request the
property `secure` as `true` and refer to your secure paramenter using the following pattern:
`{{setting.your_secure_param_name}}`.

The code for an ajax request in produciton
ENV should look like:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: 'Basic {{setting.your_secure_paramenter}}',
  },
  secure: true,
  ...
})
```

Unfortunately this configuration won't work
while you are still working on a local ENV. This would force you to
keep the following structure while you work on a local ENV and then switch it
before realising the app:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: `Basic ${zdClient.getSetting('your_secure_paramenter')}`,
  },
  secure: false,
  ...
})
```

By adding `IS_PRODUCTION` parameter setting you can forget about changing this
configuration every time you switch between ENVs. Here is the trick:

The default value is `"true"`, while the `config.json` file will override this with `false`.
In `ZDClient.js` I've added a method called `isProduction()` which will return the current value
for `IS_PRODUCTION` paramenter. Then your code will look like:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: `Basic ${zdClient.isProduction() ? '{{setting.your_secure_paramenter}}' : zdClient.getSetting('your_secure_paramenter')}`,
  },
  secure: zdClient.isProduction(),
  ...
})
```
**Note:**
This trick will only work if you run `zat server -c config.json`

## **assets/iframe.html**

In this file you will find:

* `link` to import all garden components style. Please remove all the imports that are
not needed in your current project.
* `link` to import your local css style.
* `div#app` element where your vuejs app will be injected.
* `script` to import and set **requirejs**.

## **assets/main.js**

Here is where your app will be initialized and where you will add all your additional
plugins.

```javascript
require.config({
  paths: {
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    'Vue': 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min',
    'Vuex': 'https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min',
    'ZAFClient': 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk',
  },
  shim: {
    'ZAFClient': {exports: 'ZAFClient'}
  },
  baseUrl: 'src'
});
```

In `paths` paths section you will be able to add all the plugins and libraries you
will need for you project.

With `shim` configure the dependencies, exports, and custom initialization for older, traditional "browser globals" scripts that do not use define() to declare the dependencies and set a module value.

With `baseUrl` you define the `root` of your project. In this way, when you will import
a component or a lib or an asset in your project, your absolute path will start from
`src` folder


```javascript
require([
  'components/App/App',
  'store/store',
  'Vue',
  'libs/ZDClient',
], (
  App,
  store,
  Vue,
  zdClient,
) => {

  zdClient.init();
  zdClient.events['APP_REGISTERED'](initVueApp);

  function initVueApp(data) {
    Vue.use(i18n);
    new Vue({
      el: '#app',
      store: store,
      render: (h) => { return h(App) },
    });
  }
});
```
Here is where your app will start be active. Once the framework `app.registered` is fired,
a new Vue instance will be created and `App` component will be main the root component of your
app. There is where all the logic should start.

Use the `store` only when your app has different sections (like Order and Customer) and
those components need to communicate with each other.

**Notes:**

* When you import a library or plugin, remember to remove `.js` at the end of the url
 otherwise it won't work.

* As a best practice, always use **absolute** path when you import a component into
another component.

* `APP_REGISTERED` is handled in `ZDClient.js` as described below.

* If you don't use the `store` in your app, please remove all the references to `store` and `Vuex` in the boilerplate. Also, delete `store` folder from the project.

## **assets/src/store/store.js**
In case of medium/big project you might want to use the `store`. This should be the place where you make all your API request and update your app state.

Please read documenation for reference.

## **assets/src/libs/ZDClient.js**

This file is used to add all the `methods` that make use of `ZAF`.

```javascript
let CLIENT = null;
let APP_SETTINGS = null;

return {
  events: {
    APP_REGISTERED(callback) {
      return CLIENT.on('app.registered', (data) => {
        APP_SETTINGS = data.metadata.settings;
        return callback(data);
      });
    }
  },

  init() {
    CLIENT = ZAFClient.init();
  },
  ...
```

`CLIENT` - this is object is the key point of your app that allows you to communicate
with Zendesk. Keep this object as **private** and expose only `getters` and `setter`
you need to make your app working. Same approach could be used for objects like `APP_SETTINGS` and you could also include `CURRENT_TICKET`, `CURRENT_USER` etc.


`events` - Here is where you collect all the events your app is going to listen to.
By default you have `APP_REGISTERED` which is the event that first fires once `ZAFClient.init()` is called. By passing a `callback` function, you will be able
to handles the response from wherever you want in the code. (See main.js for as example)

**Note:** Those are ment to be only suggestions and not as a must have.