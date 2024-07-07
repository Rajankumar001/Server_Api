const resModel=require('../models/resturantsModel');
 const bcrypt=require('bcryptjs');
 const resturantdata=async(req,res)=>{
    try{
       const {
        title,
        imageurl,foods,
        time,pickup,delivery,isopen,address,
       }=req.body
       const newresturants=new resModel({
        title,
        imageurl,foods,
        time,pickup,delivery,isopen,address,
       })
       await newresturants.save();
       return res.status(401).send({
        success:true,
        mesage:"resturant data created successfully"
       })
    }
    catch(err){
        console.log("error caught....",err)
    }
 }
 const getrestaurant=async(req,res)=>{
    try{
        const resturants=await resModel.find({});
        if(!resturants){
           return res.status(501).send({
            success:false,
            message:"resturant data is not available",
           }) 
        }
        return res.status(200).send({
            success:true,
            message:"data got successfully...............",
            resturants,
        })
    }catch(err){
        console.log("error caught.............",err)
    }
 }
 const deleterestaurant=async(req,res)=>{
    try{
        const id=req.params.id;
        if(!id){
            return res.status(500).send({
                success:false,
                message:"data is not available......."
            })
        }
        await resModel.findByIdAndDelete(id);
        return res.status(201).send({
            sucess:true,
            message:"data has deleted........"
        })
    }catch(err){
        console.log("error caught............",err);
        return res.status(500).send({
            success:false,
            message:"error invalid"
        })
    }
 }
 module.exports={
    resturantdata,getrestaurant,deleterestaurant
 }
