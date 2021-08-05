<p align="center">
 <img src="https://react-postit.herokuapp.com/favicon.ico" width="128px" />
</p>

# react-postit

A Notepad app built with React Hooks, Tailwind CSS, NodeJS, Express and MongoDB (mongoose). A demo is available [here](https://react-postit.herokuapp.com/). 

## How to install and run

There are few steps you need to follow in order to run this project.

### Create your MongoDB cluster
Firstly, clone this repo. Then you need to [create an Mongo DB Atlas account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account), [deploy a free cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/) and [get your cluster connection string](https://docs.mongodb.com/drivers/node/current/quick-start/#connect-to-your-cluster). It should be in this format:

```mongodb://yourusername:yourpassword@yourhost:hostport/yourdbname```

Copy this **connection string**. We'll use it later. Access the `./.env.template` file. If everything is ok, you should see this inside it:

```
DATABASEURI=mongodb://yourusername:yourpassword@yourhost:hostport/yourdatabasename
```

Change your `DATABASEURI` for your **cluster connection string**. 

**Rename** `.env.template` to `.env`, as `./server.js` file needs to find it.

### Install project dependencies

Now you have to run two set of commands:

```zsh
$ cd react-postit
$ yarn
```

```zsh
$ cd react-postit/client/
$ yarn
```

### Run the project!

Now, all you have to do is run these:

```zsh
$ cd react-postit
$ nodemon server.js
```

```
[nodemon] starting `node server.js`
Thank you for running me! I'm running on port 3001
```

After running server.js, it's time to run the React app: 
```zsh
$ cd react-postit/client
$ yarn start
```

```Starting the development server...
...
Compiled successfully!

You can now view ad-network in the browser.

  Local:            http://localhost:3000
...

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Access [http://localhost:3000](http://localhost:3000) and have fun!
