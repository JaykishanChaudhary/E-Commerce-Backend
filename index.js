const express=require('express');
const app=express();
const router=require('./Router/Router');
const mongoose=require('mongoose');
const cors=require('cors');
const CartRouter=require('./Router/Router.Cart');
const PaymentRouter=require('./Router/Router.payment');

app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',router);
app.use('/',CartRouter);
app.use('/',PaymentRouter);

mongoose.connect('mongodb+srv://jaykishanchaudhary678:Jaykishan@007@cluster0.1xz755a.mongodb.net/test/ECommerce',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('Connected to DB')
}).catch((error)=>{
    throw error
})


app.listen(5000,()=>{
    console.log('app is listening on 5000');
})

