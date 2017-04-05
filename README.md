# `OpenSnap` — Open-source Snake AI Platform (backend)

### Install Dependencies

[Node Package Manager][npm]

Install MongoDB.
Copy app/template_config.js contents to app/config.js and fill settings.

```
npm install -g gulp
```

After installed npm, and gulp, go to project directory and execute:

```
npm install
```

After that, you should find out that you have
a new folder in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
gulp
```

Now you can reach the REST endpoints of the app at [`localhost:8088`][local-app-url].

[npm]: https://www.npmjs.org/
[local-app-url]: http://localhost:8088/
