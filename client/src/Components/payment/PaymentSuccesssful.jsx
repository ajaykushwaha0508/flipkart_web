import React from 'react';
import { useSearchParams} from 'react-router-dom';
import { Typography , Box,Button ,styled } from "@mui/material";
import {Link} from "react-router-dom";


const Paymentcontainer = styled(Box)`
display : flex ;
height :100vh;
flex-direction : column; 
align-items  : center ; 
justify-content : center;
`
const Image = styled('img')({  
  padding : '15px',
  width : '20%',
  mixBlendMode :'darken'
})

const Productname = styled(Typography)`
    margin-bottom : 10px;
    font-size : 18px
`




const PaymentSuccesssful = () => {
  
    const product  = JSON.parse(localStorage.getItem("orderproduct"));
    const data = useSearchParams()[0]; // note this  -> to get the url query paramter 
    const referenceId =  data.get('reffernce'); // note this 

   const isArray =  Array.isArray(product);
    

    return (
   
    <>
       <Paymentcontainer>
       <Typography variant="h3" style={{color : "green" , marginTop :"30%"}}>Order Successful</Typography>
        {
          isArray ? <>
                        {
                          product.map((item)=>{
                            return(
                              <>
                              <Image src={item.detailUrl} alt="img"/>
                              <Productname>{item.title.longTitle}</Productname>
                              </>
                            )
                          })
                        }
                       
               </>
                 :
                <>
            <Image src={product.detailUrl} alt="img"/>
            <Productname>{product.title.longTitle}</Productname>
            </>
        }
        
        <Typography>Reference No.<Box component={"span"} style={{fontWeight :"bold"}}>{referenceId}</Box> </Typography>
       <Link to="/"> <Button variant="contained" style={{margin : "15px"}} >go to home page</Button></Link>
       </Paymentcontainer>
    </>
  )
}

export default PaymentSuccesssful;