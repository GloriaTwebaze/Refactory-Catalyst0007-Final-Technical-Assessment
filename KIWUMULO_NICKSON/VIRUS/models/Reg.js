const mongoose=require('mongoose');

const regschema= new mongoose.Schema({
  surname:{
      type:String,
    //   unique:true
  },
  givenname:{
      type:String
  },
   dateofbirth:{
       type:String
   }, 
   placeofresidence:{
       type:String
   },
   occupation:{
       type:String
   },
   nationality:{
       type:String
   },
   gender:{
       type:String
   },
   category:[ { type:String
   },]
       


})

module.exports= mongoose.model('Reg',regschema)