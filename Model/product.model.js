const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({

    title:{
        type:String,
        rquired:true
    },
    id:{
        type:String
    },
    description:{
        type:String,
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
})


const ProductModel=mongoose.model('Products',ProductSchema);

module.exports=ProductModel