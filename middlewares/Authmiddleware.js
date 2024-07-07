const JWT=require('jsonwebtoken');
const JWT_KEY='mysecretkeyismyName';

module.exports=async(req,res,next)=>{
    try{
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).send({
                success: false,
                message: "Authorization header is missing",
            });
        }

        const parts = authHeader.split(" ");
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).send({
                success: false,
                message: "Invalid Authorization header format", 
            });
        }

        const token = parts[1];
        console.log('Extracted Token:', token); //
        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Token is missing",
            });
        }
      JWT.verify(token,JWT_KEY,(err,decoded)=>{
        if(err){
             return res.status(401).send({
                success:false,
                message:"un error in API"
            })
        }
        else{
            req.body.id=decoded.id;
            next();
        }
      })
    }
    catch(err){
        console.log(err);
        res.status(401).send({
            success:false,
            message:"Error in Auth API"
        })
    }
}