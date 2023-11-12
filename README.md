# Angular Introduction - User CRUD App

This repository is a starter project in Angular Framework. It demonstrates a basic CRUD (Create, Read, Update, Delete) operations
built upon Angular components using services. The service makes calls in an API and get the data to be shown in the respective components.

It uses a JSON server for API calls. In the assets there is users.json file where JSON Server gets the list of users.
In order to start the JSON server, install the requirement package (in this example globally)

```
npm i -g json-server
```
and start the server with the path where the json file is located (relative to workspace directory)

```
json-server --watch src/assets/users.json
```

In order to launch the Angular application, go to the workspace directory and run,

```
ng serve
```