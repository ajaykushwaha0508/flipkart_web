import React from 'react';
import { useSearchParams} from 'react-router-dom';
import { Typography , Box,Button ,styled} from "@mui/material";
import {Link} from "react-router-dom";

const Paymentcontainer = styled(Box)`
display : flex ;
height :100vh;
flex-direction : column; 
align-items  : center ; 
justify-content : center;
`


const PaymentSuccesssful = () => {

    const data = useSearchParams()[0]; // note this  -> to get the url query paramter 
    const referenceId =  data.get('reffernce'); // note this 

    return (
   
    <>
       <Paymentcontainer>
       <Typography variant="h3" style={{color : "green"}}>Order Successful</Typography>
        <Typography>Reference No.<Box component={"span"} style={{fontWeight :"bold"}}>{referenceId}</Box> </Typography>
       <Link to="/"> <Button variant="contained" >go to home page</Button></Link>
       </Paymentcontainer>


    </>
  )
}

export default PaymentSuccesssful;