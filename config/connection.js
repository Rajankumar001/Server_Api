const mongoose=require('mongoose');
 mongoose.connect('mongodb+srv://chaudharyrajan387:izAFrrXoewDvcItv@cluster0.j8606gx.mongodb.net/foodapp')
 .then( function(){
   return console.log("connection successfull .......")
 }).catch( function(err){
    console.log("error caught ..........")
 })
 module.exports=mongoose;
