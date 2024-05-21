import axios from 'axios';
import * as actionTypes from '../Contants/productsConstent';
 
const URL = 'https://flipkart-web-ducg.onrender.com'; 

export const getProducts=()=>async(dispatch)=>{
    try{
        const {data} = await axios.get(`${URL}/products`); //distructuring 
        dispatch({type : actionTypes.GET_PRODUCTS_SUCCESS , payload : data}); // dispatch ko call karte hi reducer call ho jata hai 
    }catch(err){
        dispatch({type :actionTypes.GET_PRODUCTS_FAIL , payload : err.message });
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
          dispatch({type : actionTypes.GET_PRODUCT_DETAILS_REQUEST});
          
          const {data} = await axios.get(`${URL}/product/${id}`);
          dispatch({type : actionTypes.GET_PRODUCT_DETAILS_SUCCESS , payload : data });

    }catch(err){
        dispatch({type :actionTypes.GET_PRODUCT_DETAILS_FAIL , payload : err.message });
    }
}