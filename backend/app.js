// require("dotenv").config();   //will going to help to get the data from env files

const express = require('express');
const mongoose = require('mongoose');
const {HoldingsModel} = require('./model/HoldingsModel')
const {PositionsModel} = require('./model/PositionsModel');
const OrdersModel  = require('./schemas/OrdersSchema');
const cors = require('cors');
const bodyParser = require('body-parser');
const {UserModel} = require('./schemas/UserSchema');
const passport = require('passport');
const bcrypt = require('bcrypt')
 const passportLocalMongoose = require('passport-local-mongoose')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;    //AWS,axure or any other provider will give the port when we delpoy and when it's not set use 3002

const uri = 'mongodb+srv://myzerodhaclone:Shehroz@zerodha.sb30a.mongodb.net/?retryWrites=true&w=majority&appName=Zerodha'
mongoose.connect(uri);
console.log('DB connected')

// const InsertHoldingData = new HoldingsModel({
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 23,
//     price: 32,
//     net: "+0.58%",
//     day: "+2.99%"
// })

// HoldingsModel.deleteMany()
// .then(()=>console.log('your data has been deleted'))
// .catch((error)=>console.log("data not saved"))

app.get("/allholdings", async (req,res)=>{
 const allholdings = await HoldingsModel.find({});

 res.json(allholdings)
})



app.get('/positions',async(req,res)=>{
  const allpositions = await PositionsModel.find({});
 
  res.json(allpositions);
})

  

// ____________________Inserting holdings data into databse__________________
// app.get('/holdings',async(req,res)=>{
//     let tempHoldings = [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ];

//      try{
//       for(const item of tempHoldings) {
//         const newHolding = new HoldingsModel({
//               name: item.name,
//               qty: item.qty,
//               avg: item.avg,
//               price: item.price,
//               net: item.net,
//               day: item.day,
//           })
//            await newHolding.save();
          
          
//         }
//         res.send('Your data has been saved')
//      }
//      catch(err){
//       console.log("err encountered", err)
//       res.status(500).send("error found during saving")
//      }
// })



// app.get('/positions', async (req,res)=>{
//      const tempPositions =  [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27323,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];

//     for(const item of tempPositions){
//      const newPositions = new PositionsModel({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//       })
//       await newPositions.save();
//     }
   
//     res.send("Your positions data have been saved")
// })

app.get('/orders',async (req,res)=>{
        const newOrders = new OrdersModel({
          name: "testing",
          qty: 2,
          price: 2,
          mode: "Testing"
        }) 

        await newOrders.save()
        .then(()=>res.send("your orders data have been saved"))
        .catch((err)=>res.send("An error occcured",err))
        
})

app.post('/ordersdata',async(req,res)=>{
         const {qty,price} = req.body;
         const newPurchase = OrdersModel({
          qty,
          price
         })
         await newPurchase.save()
         .then(()=>console.log("data has been exported"))
         .catch((err)=>console.log("error occured during exporting",err))
})


  app.post('/signupregister',async (req,res)=>{
    const{email,password} = req.body;
  try{
    const user = new UserModel({email,
      username: email,
      
    })
    await UserModel.register(user,password)
    res.json({ success: true, message: "Your user data has been saved" });
  }
  catch(err){
    res.json({ success: false, message: err.message });

  }


  })

  app.post('/login',async (req,res)=>{
    const{email,password} = req.body;
   try{
    const user = await UserModel.findOne({email})
    
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // const firstUser = user[0]

    console.log("enterpassword",password)
    console.log("userDB", user)

    user.authenticate(password,(err,userData)=>{
      if(err){
        console.log("error during authentication",errInt);
        return res.status(500).json({message:'server error'})
      }
      if(!userData){
           return res.status(400).json({message:"user not found"})
      }
      console.log(res) 
      return res.status(200).json({ success: true, message: 'Login successful' })
      

    })

   }catch(err){
    console.log('err during login',err);
    res.status(500).json({message:'server error'});
   }


    
    
  })


app.get('/getuser', async(req,res)=>{
  const allusers = await UserModel.find({});
  const userWithPass = allusers.map(user=>({
    email: user.email,
    password: user.password
  }))
  res.send(userWithPass)
  console.log(allusers)
 })

app.listen(PORT,()=>{
    console.log("App Connected")
   
})