const mongoose=require('mongoose');
const resturantModel=mongoose.Schema({
    title:{
        type:String,
        required:[true,"resturant is required"],
    },
    imageurl:{
        type:String,
    },
    foods:{
        type:Array,
    },
    time:{
        type:String
    },
    pickup:{
        type:Boolean,
    
    },
    delivery:{
      typre:Boolean,
    
    },
    isopen:{
        type:Boolean,
        
    },
    logourl:{
        type:String,
    },
    rating:{
        type:Number,
        default:1,
        min:1,
        max:5,
    },
    code:{
        type:String,
    },
    coords:{
id:{type:String},
latitude:{
    type:Number,
},latitudeDelta:{
    type:Number,
},longitude:{
    type:Number,
},
longitudeDelta:{
    type:Number,
}
    },
    address:{
        type:String,
    }
})
module.exports=mongoose.model('Resturant',resturantModel);