const express = require("express");

const Student = require("../models/student");



const router = express.Router();
// "" or / not found
// original => get /users
// /users => get and /
// USERS CRUD
router.get("", async (req, res) => {
  try {
    const student = await Student.find().lean().exec();

    return res.status(200).send({ student: student }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



// body => req.body
// url => req.params
// query string => req.query

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).lean().exec();
    // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
