# React Portfolio

# Documentation
## Project Structure
    .
    ├── client
    │   ├── App.js
    │   ├── assets
    │   │   └── images
    │   │       ├── avatar.png
    │   │       ├── background1.png
    │   │       ├── background2.jpg
    │   │       ├── background.jpg
    │   │       ├── express.jpg
    │   │       ├── express.png
    │   │       ├── k0vhe3fbc7o51.png
    │   │       ├── laravel.png
    │   │       ├── me1.jpg
    │   │       ├── me.jpg
    │   │       ├── mongo.jpg
    │   │       ├── MrRobot.jpg
    │   │       ├── mysql.png
    │   │       ├── ngu5ofssout01.png
    │   │       ├── nodejslogo.png
    │   │       ├── psql.jpg
    │   │       ├── react.png
    │   │       └── tech.jpg
    │   ├── core
    │   │   ├── AboutMe.js
    │   │   ├── Contact.js
    │   │   ├── Home.js
    │   │   ├── Navbar.js
    │   │   ├── Projects.js
    │   │   └── Technologies.js
    │   ├── main.js
    │   ├── MainRouter.js
    │   └── portfolio
    │       ├── api-portfolio.js
    │       └── Portfolio.js
    ├── config
    │   └── config.js
    ├── nodemon.json
    ├── package.json
    ├── package-lock.json
    ├── server
    │   ├── controllers
    │   │   └── portfolio.controller.js
    │   ├── devBundle.js
    │   ├── express.js
    │   ├── helpers
    │   │   └── dbErrorHandler.js
    │   ├── models
    │   │   └── portfolio.model.js
    │   ├── routes
    │   │   └── portfolio.routes.js
    │   └── server.js
    ├── template.js
    ├── tree.txt
    ├── webpack.config.client.js
    ├── webpack.config.client.production.js
    └── webpack.config.server.js
    
## Scripts
Run the following commands to run the project:
- git clone https://github.com/k163791/protfolio-react
- npm install
- npm run development

## Demo
    AWS: http://ec2-100-25-167-45.compute-1.amazonaws.com:443/

## Server Side
### Models
    The model contains only one document because the scope of the project was not big, it contains a PortfolioSchema which contains a mongoose schema that contains all the necessary fields.
### Routes
    The routes folder contains a routes file which contains all of the routes that are being made during the project lifecycle, the routes file specifies the route(get, post, put, delete) and then passes it on to the controller to handle the request
### Controllers
    The controllers gets request from the route and sends and handles it accordingly, for example, if it gets a /api/portfolio get request it send the portfolio back to the client, if it's post it creates the portfolio.
### Helpers
    The helper files does nothing complex, it just handles the errors that have been raised by the database.
### Core Server Files
#### Server
    The Server File imports the express file and the config file, and starts to listen on the port.
#### Express
    The Express file imports the relevant middleware, sets up the server app and sends itself to the server file to be used to initalize the server.
#### Dev Bundler
    The Dev byndler file contains a single method called compile, which compiles the front and the back together using webpack-dev-middlewares so that it can run in only one stack.
    
## Client Side
### Core Components
    The MainRouter file is the BrowserRouter that implements all the front end routes, it contains the Navbar component that is outside of the switch because it is rendered all accross.
### Portfolio Component
    The Portfolio component contains all the data of the portfolio that is being rendered accross the main screen components and it manages the CRUD operations of the system.
### API-Portfolio
    The api-portfolio file is an important file as it contains all the methods that the Portfolio component uses to communicate with the server, for example(list, read, update, portfolioById)

## Server Side Rendering
    The Server side rendering is an important thing and it is implemented in the express file, the only get method that is defined in the express file, it uses the StaticRouter method and wraps around the MainRouter, also  we update a script tag to template.js so that the server can differ when a GET/ is made from the client side so that the client side can work flawlessly


