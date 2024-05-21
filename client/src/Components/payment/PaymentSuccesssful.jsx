import React from 'react';
import { useSearchParams} from 'react-router-dom';

const PaymentSuccesssful = () => {

    const data = useSearchParams()[0]; // note this  -> to get the url query paramter 
    const referenceId =  data.get('reffernce'); // note this 

    return (
   
    <>
       <div>Order Successful</div>
        <div>Reference No. {referenceId}</div>
    </>
  )
}

export default PaymentSuccesssful;