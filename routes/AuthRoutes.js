const express=require('express');
const {Authentication,Logincontroller,userdata,Updateuser,Updatepassword,deleteprofiledata}=require('../controllers/Authcontroller');
const Authmiddleware=require('../middlewares/Authmiddleware')
const router=express.Router();
// Auth or registration
router.post('/register',Authentication);
// Login
router.post('/login',Logincontroller);
router.get('/user', Authmiddleware,userdata);
router.put('/Updateuser',Authmiddleware,Updateuser);
router.put('/Updatepassword',Authmiddleware,Updatepassword);
router.delete('/deletedata/:id',Authmiddleware,deleteprofiledata)
module.exports=router;