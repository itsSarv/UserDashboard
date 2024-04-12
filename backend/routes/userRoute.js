const router = require('express').Router()
const mongoose = require('mongoose')
const User = require("../modules/usermodel");

router.post("/", async(req,res)=>{
    const {name,email,age} = req.body;
    try {
      const userData = await User.create({
      name,
      email,
      age
    });
    res.status(201).json(userData)
    }
    catch (error) {
      console.log(error)
      res.status(400).json({error:error.message})
    }
  })
  
  
  router.get('/', async(req, res) => {
    try {
      const showAll = await User.find();
      res.status(200).json(showAll);
    }
    catch (error) {
      console.log(error)
      res.status(500).json({error:error.message})
    }
  })

module.exports = router;