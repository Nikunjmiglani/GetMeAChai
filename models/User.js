import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  Username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
  },
  coverpic: {
    type: String,
  },
  // Add other fields as necessary
});

// Use existing model if it exists, otherwise create a new one
const User = mongoose.models.User || model("User", UserSchema);

export default User;

