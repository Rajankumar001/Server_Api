 const Usermodel=require('../models/Usermodel');
 const bcrypt=require('bcryptjs');
 const JWT=require('jsonwebtoken');
 const JWT_KEY='mysecretkeyismyName';
//  Register ---------------------------------------------------------------->
const Authentication=async(req,res)=>{
  try{
    
    const {userName,Email,Phone,Password,Address}=req.body;
    if( !userName ||!Email||!Password||!Phone){
        res.status(500).send({
            success:false,
            message:'Error to get the accurate data',
        })
    }
    const Existing=await Usermodel.findOne({Email});
    if(Existing){
        res.status(500).send({
            success:false,
            message:'User is Already registered',
        })
    }
    const user= await Usermodel.create({ userName,Email,Password,Phone,Address})
    res.status(201).send({
        success:true,
        message:'user`s Registeration successfull...............',
    })

  }
  catch(err){
   console.log(err);
   res.status(500).send({
    success:false,
    message:'error in register API'
   })
  }
}
// Login--------------------------------------------->
const Logincontroller=async(req,res)=>{
   try{
    const{Email,Password}=req.body;
    if(!Email||!Password){
        return res.status(500).send({
            success:false,
            message:"please provide the data",
        })
    }
    const user=await Usermodel.findOne({Email});
    if(!user){
        return  res.status(401).send({
            success:false,
            message:"user is not found",
        })
    }
    if (!user.Password) {
        console.error("Password field is missing in retrieved user document");
        return res.status(500).send({
            success: false,
            message: "User password is not set",
        });
    }
    const isMatch=await bcrypt.compare(Password, user.Password);
   if(Password ==user.Password){
    console.log("password is  working fine....")
       return res.status(200).send({
        sucess:false,
        message:"password is  working fine....",
       })
   }
   else{
    console.log("password is not matching..........");
   }
    if(!isMatch){
        return res.status(401).send({
            success:false,
            message:"Invalid credentials...",
        })
    }
    const token=await JWT.sign({id:user._id},JWT_KEY,{expiresIn:'7d'})
    return  res.status(200).send({
        success:true,
        message:"login successfully........",
        token,
        
    })
    console.log(user);

   }
   catch(err){
    console.log("error caught..",err);
    return  res.status(500).send("err is found..........")
   }
}
// user data
const userdata=async(req,res)=>{
    try{
        const user= await Usermodel.findById({_id:req.body.id});
        return res.status(200).send({
        sucess:true,
        message :"user data is getting",
        user,
      })
    }
    catch(err){
        console.log(err);
        return   res.status(401).send({
            success:false,
            message:"error in get data",

        })
    }
}
// Update
const Updateuser=async(req,res)=>{
 try{
     
    const user=await Usermodel.findById({_id:req.body.id});
    if(!user){
        return    res.status(401).send({
            success:false,
            message:"user is not found",
        })
    }
    const { userName,Phone,Address}=req.body;
    if(userName){
        user.userName=userName;
    }
    if(Phone){
        user.Phone=Phone;
    }
    if(Address){
        user.Address=Address;
    }
    await user.save();
    return  res.status(200).send({
        sucess:true,
        message:"user updated successfully ........."
    })
 }
 catch(err){
    console.log(err);
    return   res.status(500).send({
        success:false,
        message:"Internal server Error",
    })
 }
}
const Updatepassword=async(req,res)=>{
      try{
        const {Email,oldpassword,newpassword}=req.body;
         const user= await Usermodel.findOne({Email});
         if(!user){
            return  res.status(401).send({
                sucess:false,
                message:"user is not found"
            })
         }
          
          if (!user.Password) {
            console.error("Password field is missing in retrieved user document");
            return res.status(500).send({
                success: false,
                message: "User password is not set",
            });
        }
          const isMatch=await bcrypt.compare(oldpassword,user.Password);
          if(!isMatch){
           return res.status(401).send({
                success:false,
                message:"Invalid old password||password is not matching"
            })
          }
        //   const salt = await bcrypt.genSalt(10);
        //   const newhashpassword=await bcrypt.hash(newpassword,salt);
        //   if(!newhashpassword){
        //    return res.status(401).send({
        //         sucess:false,
        //         message:"new password is not hashing",
        //     })
        //   }
          user.Password=newpassword;
          await user.save();
           return res.status(200).send({
            sucess:true,
            message:"password updated correctly😂😂....."
          })
      }
      catch(err){
        console.log("error caught....",err);
         return  res.status(500).send({
            success:false,
            message:"Internal server error.."
        })
      }
}
const deleteprofiledata=async(req,res)=>{
    try{
       const deletedata=await Usermodel.findByIdAndDelete(req.params.id);
       return res.status(401).send({
        success:true,
        message:"user data has deleted",
        deletedata,
       })
    }catch(err){
        console.log("error caught",err);
    }
}
module.exports={Authentication,Logincontroller,userdata,Updateuser,Updatepassword,deleteprofiledata};