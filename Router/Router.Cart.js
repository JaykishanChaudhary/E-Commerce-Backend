const router=require('express').Router();
const CartModel=require('../Model/cart.model');


router.post('/CartPost',async(req,res)=>{
    try{
        console.log(req.body)
        const {count,amount,title}=req.body.data;
        const NewCartData=await CartModel.create({
            count,
            amount,
            title
        })
        res.status(200).json({
            status:'success',
            result:NewCartData
        })
    }catch(error){
        throw error
    }
})


router.get('/GetCart',async(req,res)=>{
    try{
        const GetCartData=await CartModel.find({});
        if(GetCartData){
            res.status(200).json({
                status:'success',
                result:GetCartData
            })
        }else{
            res.status(400).json({
                status:'failure',
                result:'No Data'
            })
        }
    }catch(error){
        throw error
    }
})

module.exports=router;