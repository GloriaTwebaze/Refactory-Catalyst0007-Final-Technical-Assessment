const express = require("express");
const router = express.Router();
const Reg=require("../models/Reg");

router.get("/reg", (req, res) => {
  res.render("reg");
});

  
  router.post("/reg", async(req, res) => {
    try {
      let up = Reg(req.body);
      await up.save();
      console.log("save was sucessful")
      res.redirect("/reg");
    } catch(err) {
      console.log(err);
      res.status(400).send("Registration wasnot succesful");
    }
  });
  

module.exports = router;
