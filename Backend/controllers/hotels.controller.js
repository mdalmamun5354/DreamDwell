import Hotel from "../models/hotel.model.js";

export const getAll = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
}

// Delete a hotel by ID
export const drop = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add a new hotel
export const add = async (req, res) => {
  const { name, rating, ratingCount, price, location, facilities, type, localAttractions } = req.body;
  const img = 'e1.jpg';
  const imgInfo = 'New Added';
  const person = {
    img: "person.png",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm…"
  }
  try {
    const newHotel = new Hotel({
      img,
      imgInfo,
      name,
      rating,
      ratingCount,
      price,
      location,
      person,
      facilities,
      type,
      localAttractions
    });
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};