import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  imgInfo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  ratingCount: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  person: {
    img: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  facilities: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  localAttractions: {
    type: String,
    required: true
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;