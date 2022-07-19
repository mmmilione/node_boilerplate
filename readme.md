# Node.js Boilerplate #

By cloning this repo you get a boilerplate for your Node.js project, thereby avoiding repetitive tasks. This is ideal if you need to spin up a simple back end for static website with a contact form.

The **MASTER** branch of this boilerplate will provide you with all the following:

1. Express app.

2. Static routing serving resources in the /dist folder (this is usually the build of a vue or react project). 

3. Express router for a basic API.

4. API route that handles enquiries coming from the contact form in the front-end.

5. Basic checks of users' inputs coming from the contact form

Switch to the **MONGO** branch if you want to get a connection to MongoDB out of the box.

## GETTING STARTED: ##

**FIRST** of all, run `npm i` to install all dependencies.

**THEN**, create a `secrets.js` file in the root of the project. This file shall contains all the custom variables that you want to keep private. The content of this fil must look like this:

```
const allSecrets = {
    //The following line is needed only if you opt for the Mongo banch
    connection: 'connection_string_2_mongo', 
    //Needed to handle enquiries
    mailer: {
        user: 'myaccount@mydomain.com',
        pw: 'my_email_password',
        host: 'my.host.com',
        port: 'port_#_of_your_mail_server'
    }
}

export default allSecrets;
```

**FINALLY**, add your own `/dist` folder which contains all the static assets you want to serve. This folder must be placed in the root of the project. It contains the assets that make up your front-end. It can be the build of a Vue or React project.