# Agile Open API Documentation

This repository demonstrates convenient workflow for developing both an API and its documentation in an effective way. 
We integrate several tools supporting the [Open API specification](https://www.openapis.org/). (aka [Swagger specification](http://swagger.io/specification/))

Main actors:
- __[restify](https://www.npmjs.com/package/restify)__ - Simple API server
- __[swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)__ - Reads jsdoc comments and generates a re-usable `swagger.json` specification
- __[swagger-ui](https://www.npmjs.com/package/swagger-ui)__ - Takes the output of `swagger-jsdoc` and displays beautiful documentation pages
- __[browser-sync](https://www.npmjs.com/package/browser-sync)__ - Listens for changes in the folder with Swagger UI documentation and reloads on changes

This toolchain is highly simplified, because it focuses on `swagger-jsdoc` and `browser-sync` as means to facilitate you, API experts, be productive.
If gulp, grunt or webpack are already present in your existing toolchain, it's a matter of configuring them a bit to take all benefits of what is shown here.


## About

The aim of this project is to demonstrate an effective workflow of building
an API-first project with live documentation which comes from code.

It basically shows how inter-connected watch tasks can work together letting you 
focus on your job while all the auto-generation happen in the background.


## API tasks

```
// Develop the API server with nodemon
$ npm run api:develop

// Document the API with swagger-jsdoc in watch mode
$ npm run api:document

// Do both at the same time
$ npm run api
```

## Documentation tasks

```
// Develop the Swagger UI documentation
$ npm run docs:develop
```
Only `npm run docs` will do the same at this stage of the project.


## Linting

[Standard](https://www.npmjs.com/package/standard) is used for standardizing the JavaScript part. 

```
$ npm run lint:js
```
Only `npm run lint` will also work just fine at this stage of the project.

Hint: [configuring WebStorm/PhpStorm](https://github.com/feross/standard/blob/master/docs/webstorm.md) worths spending the time.


## LICENSE NOTICE

All the code except Swagger UI modifications under `/api-docs` folder are licensed under MIT license. See the LICENSE file for details.

The Swagger UI modifications under `/api-docs` are licensed separately under Apache License, Version 2.0 with LICENSE.txt included in the folder. (Which is an override on top of [Smart Bear's original LICENSE](https://github.com/swagger-api/swagger-ui/blob/master/LICENSE).   