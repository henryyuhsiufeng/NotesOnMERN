# Deployment Checklist (Heroku)
All topics listed are shown in working example in the deployedEx directory.

## Getting Ready
- Dynamic Port Binding: Heroku tells us which port our app will use, so we need to make sure we listen to the port they tell us to. So instead of typing in a specific port address, we have to use Heroku's dynamic port addressing.
- Specify Node Environment: We want to use a specific version of node, so we need to tell Heroku which version we want. 
    - To do this, go to the package.json file and add to the configuration block (example): 
    ```
    "engines": {
        "node": "8.1.1",
        "npm": "5.0.3"
    }, 
    ```
- Specify Start Script: Instruct Heroku what comand to run to start our server running.
    - Find the section called scripts in package.json and replace inside:
    ```
    "start": "node index.js"
    ```
    This automatically has heroku run index.js upon starting the application.
- Create .gitignore file: We don't want to include dependencies, Heroku will do that for us.
    - In root file, create a .gitignore. 
    - Inside .gitignore add node_modules so that anything in node_modules will not be added to the git commit. 

## First Time Deploy
1. Create Heroku account
2. Commit our codebase to git
3. Install Heroku CLI and Create App
4. Deploy App with Git
5. Heroku deplpys project

## Subsequent Deploys
1. Commit codebase with git
2. Deploy App with Git 

## Environment Variables
ex) const PORT = process.env.PORT
    -  Variables that are set in the underlying runtime that node is running on top of. Heroku's opportunity to pass us runtime configuration after we have deployed our application is. This is important because we won't know the port until the very last moment when our app is about to be executed by Heroku. 
    - If running locally, process.env.PORT might not be available to us. To address this issue,use a boolean statement. 