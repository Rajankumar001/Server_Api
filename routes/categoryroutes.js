const express=require('express');
const router=express.Router();
const {createcategory,getcategoryAll,updatecategory,deletecategory}=require('../controllers/categorycontroller');
router.post('/create',createcategory);
router.get('/getAll',getcategoryAll);
router.put('/update/:id',updatecategory);
router.delete('/delete/:id',deletecategory);

module.exports=router;