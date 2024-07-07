const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const Userschema=mongoose.Schema({
    userName:{
        type:String,
        required:true,
       
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
    },
    Phone:{
       type:Number,
       required:true,
    },
    Usertype:{
        type:String,
        default:'client',
    },
    Profile:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s',
    }
});
Userschema.pre("save",async function(next){
    if(this.isModified('Password')){
        try{
        this.Password= await bcrypt.hash(this.Password,10);    
    }
    catch(e){
         console.log("error hashing password",e);
    }
}
    next();
})
module.exports=mongoose.model('User',Userschema);