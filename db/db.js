const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports={db}