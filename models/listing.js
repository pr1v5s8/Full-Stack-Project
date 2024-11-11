const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533",
         set: (v) => v === "" ? "https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533" : v,},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;