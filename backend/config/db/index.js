import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("Connect to MongoDB Successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB");
  }
};

export { connect };
