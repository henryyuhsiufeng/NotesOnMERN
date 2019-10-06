# Intro To Node

* What is Node?
    - Before, all the javascript that you wrote could only be run on the browser, so only front end code. Node.js is a way for us to write javascript on the server-side.
    - A Generic stack
        - Backend Language/App + Server + Database | --> | HTML JS CSS|
* Why are we learning it?
    - Increasing marketshare
    - Javascript

# Intro To NPM
* npm install 'package name' will create a folder called node_modules that will store the code downloaded online.
* ex var something = require("cat-me");

# Intro to Express
* What is a framework? How is it different from a library?
    - (From StackOverflow) The most important difference, and in fact the defining difference between a library and a framework is Inversion of Control. 
    - When you call a library, you are in control. But with a framework, the control is inverted: the framework calls you. 
    - METAPHOR: framework = madlibs
* What is Express?
    - Web Development framework.
* Why are we using Express? 
    - Popular
    - A lot of contributions and tutorials
    - Heavy vs. Lightweight (Needs more filling in) frameworks
    - Express is lightweight
    - Forces you to understand what is going on. 

# NPM Init and Package.json
* Use the '--save' flag to install packages
* package.json
    - File that contains all the meta data relative to a certain project (name, authors, contributers, and dependencies). 
    - Rather than uploading all the code, package.json tells you what to download instead. 
* 'npm init' to create a new package.json

# Relationship between Express and Node
* (Recap)
    - Node: Javascript runtime used to exevute code outside of the browser. 
    - Express: Library that runs in the Node runtime. Has helpters to make dealing with HTTP traffic easier. You can code everything in Express using just Node. Express is just a "helper."
* Node would be configured to listen to traffic on a specific port. 
* Express looks at the request and decides what chunk of code will "handle" or respond to the request
* In express, there are route handlers that would deal with things such as authenticity of a user or another that would log out a user. Express would figure out which appropriate route handler to send that certain response to. 
* The route handlers would process the incomeing request and generate a response that would be sent back to the node process. 
* Node after getting the response from the route handler would "res" or respond to the incoming HTTP request. 
