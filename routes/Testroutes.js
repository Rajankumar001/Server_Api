const express=require('express');
const {testdata}=require('../controllers/Testcontroller');
const router=express.Router();
router.get('/test',testdata);
module.exports=router;