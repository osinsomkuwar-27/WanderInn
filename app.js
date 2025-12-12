const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderinn";

main().then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Welcome to WanderInn");
});

//index route to show all listings
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {listings: allListings});
});


// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "Cozy Cottage",
//         description: "A cozy cottage in the countryside.",
//         image: " ",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India"
//     });
//     await sampleListing.save()
//     console.log("sample was saved");
//     res.send("Sample listing saved successfully!");
// });

app.listen(8080,() => {
    console.log("Server is running on port 8080");
});