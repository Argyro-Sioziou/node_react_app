# About
A simple app for registering and viewing students.

# What can you use it for?
* View students based on their nationality.
* Create a new student.

# Dependencies
The app is using MongoDB so make sure you have it installed.
To be able to run the app make sure you have all the specified dependencies. To do so  navigate first to the /client folder and run:
 ```ruby
 npm install
```
Repeat the same command inside /server folder.

# Database 
Create a collection called students.
To populate the database navigate to server/init folder. Run:
 ```ruby
npm create_students.js.
```

# Server
In order to get the server running navigate to /server and execute:
```ruby
nodemon ./bin/www
```

# Client
To start the client navigate to /client folder and run:
```ruby
npm start
``` 

After a few seconds the site should open on your browser. If not visit the url [http://localhost:3000/home](http://localhost:3000/home).

# Screens
The app offers two screens.
* The first one is available at [http://localhost:3000/home](http://localhost:3000/home) and shows all the registered students filtered by their nationality.
* The second one is available at [http://localhost:3000/new](http://localhost:3000/new) and provides the user a form to register new students.

You can also navigate inside the app using the navigation bar on top.
