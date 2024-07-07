const categoryModel=require('../models/categoryModel');
const createcategory=async(req,res)=>{
    try{
        const {title,logo}=req.body;
        const createcategory=new categoryModel({
            title,logo
        })
       await createcategory.save();
       return res.status(201).send({
        success:true,
        message:"category section created successsfully..............."
       })
    }catch(err){
        console.log("error caught............",err);
        return res.status(500).send({
            success:false,
            message:"error caught...",
        })
    }
}
const getcategoryAll=async(req,res)=>{
    try{
        const getdata=await categoryModel.find({});
        if(!getdata){
            return res.status(500).send({
                sucess:false,
                message:'category is not available'
            })
        }  
        return res.status(201).send({
            success:true,
            message:"data get fetched.........",
            getdata
        })   
    }
    catch(err){
        console.log("error caught.............",err);
        return res.status(500).send({
            suceess:false,
            message:"error caught......",
        })
    }
}
const updatecategory=async(req,res)=>{
    try{
       const updateId=req.params.id;
       const {title,logo}=req.body;
       const updated=await  categoryModel.findByIdAndUpdate(updateId,{title,logo},{new:true,})
       return res.status(201).send({
        success:true,
        message:"category updated successfully............"
       })
    }
    catch(err){
        console.log("error caught.....................");
        return res.status(500).send({
            success:false,
            message:'error caught........'
        })
    }
}
const deletecategory=async(req,res)=>{
    try{
        const deleteId=req.params.id;
        const deletedData=await categoryModel.findByIdAndDelete(deleteId);
        if(!deleteId){
            return res.status(500).send({
                success:false,
                message:"data is not available."
            })
        }
        return res.status(201).send({
            success:true,
            message:"category data is deleted successfully........"
        })
    }
    catch(err){
        console.log("error caught........");
        return res.status(500).send({
            success:true,
            message:"error caught ,Invalid error........"
        })
    }
}
module.exports={createcategory,getcategoryAll,updatecategory,deletecategory};