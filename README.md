Robots (technical test) - Federico Maffei
=================

This is my solution for the robots test.

###Technologies used:

* Node.js.
* MongoDB database.
* Express web framework.
* AngularJS.
* PhantomJS, Karma and Jasmine.
* Heroku for deployment.

###Overview on the project design:

The project is built as a MEAN (MongoDB, Express, Angular, Node.js) application. To generate the basic codebase I used the Yeoman Angular Generator.

To describe the behaviour of a robot I used an Angular service. This allowed me to separate the application logic in a reusable object, which is useful to handle more than one robot. I then inject the Robot service in the AngularJS controller, which allows me to perform get, post and delete requests to a server (created with the Express framework), and save the robot related data in JSON format, with the help of a MongoDB schema.


###Drawbacks and possible improvements:


###File structure:


###Instructions to run both application and tests:

To run the application live on Heroku follow this link:
[http://frobots.herokuapp.com/](http://frobots.herokuapp.com/)

To clone the repository from GitHub execute from command line:

```bash
git clone https://github.com/federicomaffei/robots.git
```