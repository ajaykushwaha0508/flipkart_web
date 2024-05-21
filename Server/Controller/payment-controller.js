// import paytmchecksum from '../paytm/PaytmChecksum.js';
// import { paytmParams , paytmMerchantKey } from '../index.js';

// import {IncomingForm}  from 'formidable'; // npm i formidable

// import https from 'https'; //npm i https 

// export const addPaymentGateway= async(request , response)=>{
//        const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
              
//        try {
//            const params = {
//                ...paytmParams,
//                'CHECKSUMHASH': paytmCheckSum
//            };
           
//            response.status(200).json(params);
//        } catch (error) {
//            console.log(error);
//            response.status(500).json({error : error.message});
//        }
//    }

// export const getresponse = async(request , response)=>{
//               const form = new IncomingForm();
//               let paytmCheckSum = request.body.CHECKSUMHASH;
//               delete request.body.CHECKSUMHASH;

//               let isVerifySignature = paytmchecksum.verifySignature(request.body , paytmMerchantKey ,paytmCheckSum);
//               if(isVerifySignature){
//                      let paytmParams = {};
//                      paytmParams['MID'] = request.body.MID;
//                      paytmParams['ORDERID'] = request.body.ORDERID;

//                      paytmchecksum.generateSignature(paytmParams,paytmMerchantKey).then(function(checksum){
//                             paytmParams['CHECKSUMHASH'] = checksum;

//                             const  post_data = JSON.stringify(paytmParams);

//                             const  options = {
//                                    hostname : "securegw-stage.paytm.in",
//                                    port : 443,
//                                    path : '/order/status',
//                                    method : 'POST' , 
//                                    headers : {
//                                           'Content-Type' : "application/json",
//                                           'Content-Length' : post_data.length
//                                    }
//                             }

//                             let res = "";
//                      const  post_req = https.request(options , function(post_res){
//                                    post_res.on('data' , function(chunk){
//                                           res+= chunk; 
//                                    });

//                                    post_res.on('end' , function(){
//                                           let result = JSON.parse(res);
//                                           response.redirect(`http://localhost:3000/`);
//                                    });
//                             });

//                             post_req.write(post_data);
//                             post_req.end();
//                      })
//               }else{
//                      console.log("Checksum mismatched");
//               }              
// }

//=======================

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
                              res.redirect(`http://localhost:3000/paymentsuccess?reffernce=${razorpay_payment_id}`);

                            }else{
                              res.status(400).json({success : true});
                            }
          
}

