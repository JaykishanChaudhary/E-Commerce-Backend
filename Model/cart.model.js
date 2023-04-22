const mongoose=require('mongoose');

const CartSchema=new mongoose.Schema({
    count:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    }
})

const CartModel=mongoose.model('Cart',CartSchema);

module.exports=CartModel