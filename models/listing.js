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
    default:
      "https://www.freepik.com/free-ai-image/breathtaking-view-natural-beach-landscape_266519540.htm#fromView=keyword&page=1&position=0&uuid=7ed9e903-8009-468a-a8df-1261c42722b5&query=Beautiful+scenery",
    set: (v) =>
      v === " "
        ? "https://www.freepik.com/free-ai-image/breathtaking-view-natural-beach-landscape_266519540.htm#fromView=keyword&page=1&position=0&uuid=7ed9e903-8009-468a-a8df-1261c42722b5&query=Beautiful+scenery"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
