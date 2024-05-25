import { useState } from "react";
import axios from 'axios';

import { Box , Button , styled } from "@mui/material" ;
import {ShoppingCart as Cart , FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
// import {payUsingPaytm} from '../../service/api';
// import { post } from "../../utils/paytm.js";

import {backendurl} from "../../Constants/url"; 

import { addToCart } from "../../Redux/Actions/cartAction";
import { useDispatch } from "react-redux";


const LeftContainer = styled(Box)(({theme})=>({
   minWidth : '40%',
    padding : '40px 0px 0px 80px',
    [theme.breakpoints.down('lg')] : {
        padding : '20px 40px '
    }
 }))

const Image = styled('img')({  
    padding : '15px',
    width : '90%'
});

const StyledButton = styled(Button)(({theme})=>({
    width : '48%',
    height : 50,
    borderRadius : 2, 
    [theme.breakpoints.down('lg')] : {
        width : '46%',
        
    },
    [theme.breakpoints.down('sm')] : {
        width : '48%',
          
      }

}))





export const checkoutHandler=async( productdata , amount)=>{
    localStorage.setItem("orderproduct" , JSON.stringify(productdata));

    const {data:{key}} = await axios.get(`${backendurl}/api/getkey/`);
   const { data:{order}} = await axios.post(`${backendurl}/api/checkout` , {
    amount
   });
      
   // this is from rozarpay doc r
   var options = {
    key:key, // Enter the Key ID generated from the Dashboard
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Ajay Kushwaha",
    description: "Rozarpay api testing",
    image: "https://avatars.githubusercontent.com/u/129685062?v=4",
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: `${backendurl}/api/paymentverification`,
    prefill: {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#3399cc"
    }
};    
     var rzp1 = new window.Razorpay(options);
    rzp1.open();      // console.log(window); // we can see the rozarpay obj in  window 
};






const ActionItem=({product})=>{
    const navigate = useNavigate();
    const {id} = product;
    const [quantity , setQuantity] = useState(1);
    const dispatch = useDispatch();


    const addItemToCart=()=>{
        dispatch(addToCart(id , quantity));
        navigate('/cart');
 }



    return(
        <LeftContainer>
            <Box style={{padding : '15px 20px', border : '1px solid #f0f0f0f0' }}>
            <Image src={product.detailUrl} alt="img"/>
            </Box>
            <StyledButton variant='contained' onClick={()=> addItemToCart()} style={{marginRight : 10 , background : '#ff9f00'}}><Cart/>Add to Cart</StyledButton>
            <StyledButton variant='contained' onClick={()=> checkoutHandler( product , product.price.cost)} style={{background : '#fb541b'}}><Flash/>Buy Now</StyledButton>
        </LeftContainer> 
    )
}

export default ActionItem;