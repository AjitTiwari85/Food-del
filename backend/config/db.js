import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ajweb:72485858@cluster0.kg08vgp.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
