const express=require('express');
const {resturantdata,getrestaurant,deleterestaurant} =require("../controllers/resturantcontroller")
const Authmiddleware=require('../middlewares/Authmiddleware')
const router=express.Router();
// Auth or registration
router.post('/resturant',Authmiddleware ,resturantdata);
router.get('/getrestaurant',Authmiddleware,getrestaurant);
router.delete('/deleterestaurant/:id',Authmiddleware,deleterestaurant);
module.exports=router;