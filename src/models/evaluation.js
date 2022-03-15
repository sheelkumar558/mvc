const mongoose = require("mongoose");

// POST SCHEMA
// Step 1 :- creating the schema
const evaluationSchema = new mongoose.Schema(
  {
    
    date_of_evaluation: { type: Date, required: true },
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
      batchId: {
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
module.exports = mongoose.model("evaluation", evaluationSchema); // post => posts
