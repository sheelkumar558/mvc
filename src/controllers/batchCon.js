const express = require("express");

const Batch = require("../models/batch");



const router = express.Router();
// "" or / not found
// original => get /users
// /users => get and /
// USERS CRUD
router.get("", async (req, res) => {
  try {
    const batch = await Batch.find().lean().exec();

    return res.status(200).send({ batch: batch }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



// body => req.body
// url => req.params
// query string => req.query

router.get("/:id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id).lean().exec();
    // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(batch);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
