const router=require('express').Router();
const Razorpay=require('razorpay');

router.post('/PayPost',async(req,res)=>{
    var instance = new Razorpay({ key_id: 'rzp_test_S51sRVeogn4EAE', key_secret: 'nk81Oz4fNWNpOVZGFcztpr1p' })

    const options={
        amount:req.body.data.amount*100,
        currency:"USD"
    }
 

    const order=await instance.orders.create(options)
    console.log(order);

    res.status(200).json({
        status:true,
        order
    })
})

router.post('/PayPostVarification',async(req,res)=>{
    console.log(req.body);
    res.status(200).json({success:true,});
})

router.get('/getKey',(req,res)=>{
    res.status(200).json({key:"rzp_test_S51sRVeogn4EAE"})
})


module.exports=router
 