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
    type: String
  },
  ratingCount: {
    type: Number
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
      type: String
    },
    comment: {
      type: String
    }
  },
  facilities: {
    type: String
  },
  type: {
    type: String
  },
  localAttractions: {
    type: String
  },
  isOpen: {
    type: Boolean,
    default: true
  }
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;