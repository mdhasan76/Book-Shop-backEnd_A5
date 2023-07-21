import mongoose from "mongoose";
import app from "./app";
const port = process.env.PORT || 5000;
const main = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://redux_watch:A9X120BVhPvA4eVV@cluster0.mj4ed9j.mongodb.net/assainment-5?retryWrites=true&w=majority`
    );
    app.listen(port, () => {
      console.log("server is running");
    });
  } catch (err) {
    console.log(err);
  }
};

main().catch((err) => console.log(err));
