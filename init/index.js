const mongoose = require("mongoose");
const initData=require("./data");
const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
    console.log("Database connection successful");
    })
    .catch((err) => {
    console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"67bd90ab6300c8cf5106562e"}));
    await Listing.insertMany(initData.data);
    console.log("Database iniatilized successfully");
}

initDB();