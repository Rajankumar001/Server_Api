const mongoose=require('mongoose');
const categoryModel= mongoose.Schema({
       title:{
        type:String,
        required:[true,"title is required...."],
       },
       logo:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522food%2Blogo%2522&psig=AOvVaw2waa-2zROiXelhvEYuwp4v&ust=1719116901529000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjUxdev7oYDFQAAAAAdAAAAABAJ"
       },
       
       
})
module.exports=mongoose.model('category',categoryModel);