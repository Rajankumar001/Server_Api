const testdata=(req,res)=>{
    try{
      res.send("your test is working fine..........")
    }
    catch(err){
        console.log('error caught......')
    }
}
module.exports={testdata};