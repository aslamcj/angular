# Mastercard Connect #

This project codebase uses the following toolkits and libraries
* AngularJS version 1.5.6
* Jquery version 1.11.2
* Gulp version 3.8.9
* Bower, npm and node latest version

## What is Angular JS ? ##
AngularJS is an open source web framework maintained by [engineers at Google](https://developers.google.com/).
> AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology. Read more [here](https://docs.angularjs.org/guide/introduction).

# How to Install the package #

* If running from Mastercard environment, run `npm set strict-ssl false` to ensure that ssl based dependencies can download without any errors.
* Run `npm install bower -g` to install bower globally
* Run `npm install gulp -g` to install gulp globally
* Run `npm install` for install all the required dependencies. (It will internally install bower dependencies as well)

## Build & development ##

* Run `gulp bower` to link bower dependencies to gulp tak runner

* Run `gulp` or `gulp build` for building or

* Run `gulp serve` for static code base preview and edit

* gulp serve --env=local 
*/public/portalplatform/json/countries/all
