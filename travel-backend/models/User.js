import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  photo: String,
  password: String, // optional for Google users
});

 const User = mongoose.models.User || mongoose.model('User', userSchema);

 export default User;
