const mongoose = require("mongoose");

// POST SCHEMA
// Step 1 :- creating the schema
const studentSchema = new mongoose.Schema(
  {
    rollId: { type: Number, required: true },
    currentBatch: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
module.exports = mongoose.model("student", studentSchema); // post => posts
