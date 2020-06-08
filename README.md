# MongoDB & Mongoose
A Beginer guide for using MongoDB and NodeJs
-At the end of this you should be able to setup a MongoDb databse and perform basic CRUD operations using Node.JS,and a couple of tricks up yoour sleeve too.

## Objective
- How to configure and setup NodeJS to a MongoDb Database
- How Mongoose helps in modelling elegant mongodb objectfor node.js
- How to set up your local environment
- Basic CRUD operations
- Writing good schemas
- Mongo3T is a great hack!

# Introduction
## Step 1 
> Setting up your local environment.
#### Install Node.js
First, make sure you have a supported version of Node.js installed 
- https://nodejs.org/en/download/

#### Install the MongoDB Node.js Driver
The MongoDB Node.js Driver allows you to easily interact with MongoDB databases from within Node.js applications. You’ll need the driver in order to connect to your database and execute the queries.
- npm install mongodb 
- yarn install mongodb

#### Create a free MongoDB Atlas cluster 
The documentation is really great refrence source and guide if you choose this option.
-https://docs.atlas.mongodb.com/getting-started/

## Alternative
### Download Robo 3T
is a GUI and IDE for developers and data engineers who work with MongoDB. Data management features such as in-place editing and easy database connections(In this case I used Robo 3T for convinience and simplicity)

## Step 2 
-Now we are all set up.Two more things to do to initialize our project.
1) Pop up your command line interface.
- > Mongod -This command is simply to start  your database
- > Mongo- This command provides a powerful interface for system administrators.

## Step 3
Using your code editor (Visual studio is a great recommendationn).
install Mongoose and MongoDB using npm or Yarn.
> npm install mongoose mongodb

- Now let's start coding:
1) Create a simple Fruit review's databse 
2) Model a Fruits Schema which is basically nested Javascript Object.

```
// jshint esversion:6 

const mongoose = require('mongoose'); //open database
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field can not be empty"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
```

## Step 4
- Let's create a databse model using our fruit scehmea.
- Add a single fruit inside our database and save it.

```
// automatically generates fruits collections
const Fruit = mongoose.model("Fruit", fruitSchema);

// create fruit document
const apple = new Fruit({
    name: "apple",
    rating: 8,
    review: "What a fruit"
  
const passion = new Fruit({
    name: "passion",
    rating: 10,
    review: "Simply the best"
});
});
apple.save().then(() => console.log('New Fruit added'));;
```
## Step 5
- Let's Open our Command line and see if our apple was added to the Fruits datatbase.(Option 1)
![commandline](https://user-images.githubusercontent.com/61579772/84004229-d06d3900-a99d-11ea-9e46-3ee4ba709161.jpg)

- Easier way to do all those shell commands is by using Robo3T (Option 2)

![Fruits find](https://user-images.githubusercontent.com/61579772/84004234-d2cf9300-a99d-11ea-8ea5-2ae0ed296861.jpg)


## Step 6
Now we have our apple which is saved as a doccument in our Databse.
- You: What happened to the passion fruit🤔... 
- Me: I'm no passion hater,So let me show you a better trick instead😏
- You: What is better than passion fruit 🙄?
- Me: Being able to add as many fruits as you like and make fruit shake 🤣

```
const banana = new Fruit({
    name: "banana",
    rating: 4,
    review: "What a yummy fruit"
});
const kiwi = new Fruit({
    name: "kiwi",
    rating: 9,
    review: "What an amazing fruit"
});
const passion = new Fruit({
    name: "passion",
    rating: 10,
    review: "Simply the best"
});


// Add many fruits
Fruit.insertMany([banana, kiwi,passion], function(err) {
    if (err) {
        console.log("Error in the fruits");
    } else {
        console.log("Fruits added successfully");

    }
});
```


## Step 7
- You:Despite being a fruit shake lover what else can we do with this fruits database🤨.
- Me:Be RUD 🙂
- You: Huh,what do you mean!
- Me: Read,Update and Delete stuff.
- You: So the basic aim here is to create some fruits,have a look at the fruits,Add some fruits and eventualaly delete them.
- Me: Yes,It's the cycle of life.Let me show you how.

```
// Updating a document
Fruit.updateOne({ _id: "5e8c5fc295fd6307a4d178b8" }, { review: "Not so bad" }, function(err) {
    if (err) {
        console.log(err);

    } else {
        console.log("Successfully updated the document");

    }
});
Fruit.deleteOne({ _id: "5e8c60194e961515c44fda45" }, function(err) {
    if (err) {

        console.log(err);

    } else {
        console.log("Deleted document");

    }
});
```
- You: Hold up🤯!wait,what is all this stuff where did you get this from,what is that long ID😟😭
- Me: Don't let this stuuf scare you,let me break it down
- You: Go Ahead..
- Me: The ```Fruit.updateOne``` function goes through our many Fruits and updates the review of the fruit with the matching Id.
- You: Where did you get the ID
- Me: Once you turn 18 you'll definetly get one😅
- You: (Closing my tab cause I joke too much !)
- Me: The ID comes from our fruit(document) and it is automatically generated for you.
- Me: Drops Databse!😎

### Conclusion
I hope at the end of this you were able to set up your local environment and set up a simple database using MongoDB and NodeJs.
- Perform basic CRUD operations
- Start Living Healthy and eat fruits. 😋

### References
- 1.https://docs.mongodb.com/manual/reference/mongo-shell/#mongo-shell-command-history
- 2.https://stackoverflow.com/questions/4883045/mongodb-difference-between-running-mongo-and-mongod-databases
- 3.https://mongoosejs.com/
- 4.https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database



