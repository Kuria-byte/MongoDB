// jshint esversion:6
const mongoose = require('mongoose'); //open database
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// create a schema
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

// create model (automatically generates fruits collections)
const Fruit = mongoose.model("Fruit", fruitSchema);

// create fruit document
const apple = new Fruit({
    name: "apple",
    rating: 8,
    review: "What a fruit"
});
apple.save().then(() => console.log('New Fruit added'));;


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


// person schema
const personSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    favourite: fruitSchema
})

// person model (creates persons colllection)
const Person = mongoose.model("Person", personSchema);

// person object/document
const person = new Person({
    id: 2,
    name: "Brian",
    age: 20,
    favourite: kiwi
});


person.save().then(() => console.log('New person added'));;



// loop through fruit array and print name properties
Fruit.find(function(err, fruits) {
    if (err) {
        console.log("Cant find");
    } else {

        fruits.forEach(function(fruit) {
            console.log(fruit.name);

        });
    }
    mongoose.connection.close(); //closing database
});

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