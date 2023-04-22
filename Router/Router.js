const router=require('express').Router();
const ProductModel=require('../Model/product.model');

router.get('/getproduct',async(req,res)=>{
    try{
        const product=await ProductModel.find();
        if(product){
            res.json({
                status:'success',
                result:product
            })
        }else{
            res.json({
                status:'failure',
                result:'Data not found'
            })
        }
    }catch(error){
        throw error
    }
})

router.post('/postproduct',async(req,res)=>{
    try{
        const {title,id,description,price,image}=req.body;
        console.log(req.body);
        const product=await ProductModel.create({
            title,
            id,
            description,
            price,
            image
        })
        res.json({
            status:'success',
            result:product
        })
    }catch(error){
        throw error
    }
})

module.exports=router