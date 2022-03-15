const mongoose = require("mongoose");

// POST SCHEMA
// Step 1 :- creating the schema
const batchSchema = new mongoose.Schema(
  {
    rollId: { type: Number, required: true },
    batchName: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    studentId: {
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
module.exports = mongoose.model("batch", batchSchema); // post => posts
