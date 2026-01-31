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
    default:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fbhttps://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    set: (v) =>
      v === " "
        ? "https://images.unsplash.com/photo-1506744038136-46273834b3fbhttps://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
        : v,
  },

  price: Number,
  location: String,
  country: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Listing", listingSchema);
