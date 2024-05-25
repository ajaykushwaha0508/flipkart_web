

import { instance } from "../index.js";
import  crypto from "crypto"; // inbuilt in node

export const checkout = async(req , res)=>{

    console.log("in checkout");

    var options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };
      const order = await instance.orders.create(options);

      console.log(order);

     res.status(200).json({success : true , order});
}


export const paymentverification = async(req , res)=>{

    console.log("in payment verification ");
     
    const {razorpay_payment_id , razorpay_order_id , razorpay_signature } = await req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
     
    

    var expectedSignature = crypto.createHmac('sha256' , process.env.ROZARPAY_API_SECRET)
                            .update(body.toString()).digest('hex');

                            console.log("rec signature" , razorpay_signature);
                            console.log("generated signature" , expectedSignature);
                            

                            const isAuthentic  = razorpay_signature === expectedSignature;
                            if(isAuthentic){
                              res.redirect(`https://flipkart-web-ducg.onrender.com/paymentsuccess?reffernce=${razorpay_payment_id}`);
                            }else{
                              res.status(400).json({success : true}); 
                            }
          
}

