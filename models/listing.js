const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: String,
    image: {
     filename: {
        type: String,
     default:
        "https://www.pexels.com/photo/spring-plum-blossoms-close-up-on-branch-28929816/",
    
     set: (v) =>
         v === "" 
          ? "https://www.pexels.com/photo/spring-plum-blossoms-close-up-on-branch-28929816/"
          : v,
    },
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;