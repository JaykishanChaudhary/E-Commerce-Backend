const router=require('express').Router();
const Razorpay=require('razorpay');
const {mong_paymodel}=require('../Model/product.model');
const crypto=require('crypto')

router.post('/PayPost',async(req,res)=>{
    var instance = new Razorpay({ key_id: 'rzp_test_S51sRVeogn4EAE', key_secret: 'nk81Oz4fNWNpOVZGFcztpr1p' })

    const options={
        amount:req.body.data.amount*100,
        currency:"INR"
    }
 

    const order=await instance.orders.create(options)
    console.log(order);

    res.status(200).json({
        status:true,
        order
    })
})

router.post('/PayPostVarification',async(req,res)=>{
    console.log("req.body",req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac("sha256", 'nk81Oz4fNWNpOVZGFcztpr1p')
    .update(body.toString())
    .digest("hex");
    console.log("sig received " ,razorpay_signature);
    console.log("sig generated " ,expectedSignature);
    const authentication = expectedSignature === razorpay_signature
    if(authentication){
        await mong_paymodel.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        })
        res.redirect(`http://localhost:3000/checkoutsucess?reference=${razorpay_payment_id}`)
    }
    else{
        res.status(200).json({
            success: false
        })
    }
})

router.get('/getKey',(req,res)=>{
    res.status(200).json({key:"rzp_test_S51sRVeogn4EAE"})
})


module.exports=router
 