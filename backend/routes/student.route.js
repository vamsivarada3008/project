const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// Student Model
const Student = require("../models/Student");

// CREATE Student
router.post("/create-student", async (req, res, next) => {
  const { name, email, rollno } = req.body;
  try {
    const newStudent = await Student.create({ name, email, rollno });
    return res.status(200).json({
      msg: "Student created successfully !",
      id: newStudent._id
    });
  }
  catch (err) {
    console.log(err);
  };

});



// READ Students



// UPDATE student
router
  .route("/update-student/:id")
  // Get Single Student
  .get(async (req, res) => {
    try{
    const isDone=await Student.findById(
      req.params.id);
      if(isDone){
        res.json(isDone);
      }
    }
    catch(err){
      res.json(err);
    };

  })

  // Update Student Data
  .put(async (req, res, next) => {
    const { name, email, rollno } = req.body;
    const isDone=await Student.findByIdAndUpdate(
      req.params.id,
      {
        $set: {name, email, rollno},
      }

    );
    if(isDone){
      res.json('successfully updated');
    }
    else{
      res.json('error');
    }
  });


// Delete Student
router.delete("/delete-student/:id",async (req, res, next) => {
  try{
    const isDeleted=await Student.findByIdAndRemove(
      req.params.id);
    if(isDeleted){
      res.json('successfully deleted');
    }

    }
    catch(err){
      res.json(err);
    }
    
  });
router.get('/',async (req, res) => {
  const students=await Student.find();
  res.json(students);
  

});

module.exports = router;