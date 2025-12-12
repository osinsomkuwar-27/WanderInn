const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  filename: String,
  url: String,
});

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    type: imageSchema,
    default: {
      filename: "default",
      url: "https://www.freepik.com/free-ai-image/breathtaking-view-natural-beach-landscape_266519540.htm#fromView=keyword&page=1&position=0&uuid=7ed9e903-8009-468a-a8df-1261c42722b5&query=Beautiful+scenery",
    },
  },

  price: Number,
  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", listingSchema);
