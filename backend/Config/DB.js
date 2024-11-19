const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const Conn = await mongoose.connect(process.env.DB);
    console.log("MONGODB CONNECTED SUCCESSFULLY !!");
    return Conn;  // Optionally return the connection if needed elsewhere
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);  // Exit the process if connection fails
  }
};

module.exports = ConnectDB;
