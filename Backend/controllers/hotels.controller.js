import Hotel from "../models/hotel.model.js";

export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
}