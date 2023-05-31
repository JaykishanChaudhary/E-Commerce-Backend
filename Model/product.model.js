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

const payment_details=new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true,
      },
      razorpay_payment_id: {
        type: String,
        required: true,
      },
      razorpay_signature: {
        type: String,
        required: true,
      },
})

const mong_paymodel=mongoose.model("payment_details",payment_details);










module.exports={ProductModel,mong_paymodel}

