import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email"],
    required: "Email is required",
  },
  phone_number: {
    type: "String",
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  update: Date,
  Github: String,
  LinkedIn: String,
  aboutme: {
    type: String,
    trim: true,
    required: "About me is required",
  },
  projects: [
    {
      name: String,
      technologies: [],
      description: String,
      date: Date,
      github: String,
    },
  ],
});

export default mongoose.model("Portfolio", PortfolioSchema);
