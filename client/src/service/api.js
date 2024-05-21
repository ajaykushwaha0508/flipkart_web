// import axios from 'axios';

// const URL = "http://localhost:8000"; 

// export const autenticateSignup= async (data)=>{
//      try{
//        return await axios.post(`${URL}/signup` , data);
       
//      }catch(err){
//                 console.log( "error while connecting with signup api" , err.response.data);
              
//      }
// } 

// export const autenticatelogin= async (data)=>{
//      try{
//        return await axios.post(`${URL}/login` , data);
       
//      }catch(err){
//                 console.log( "error while connecting with login api" , err.response.data);
//                 return err.response;
              
//      }
// } 

// export const payUsingPaytm = async (data)=>{
//   try{
//       let response = await axios.post(`${URL}/payment` , data);
//       return response.data;
//   }catch(err){
//     console.log("Error while calling payment api" , err)
//   }
// }



import axios from 'axios';

const url = 'https://flipkart-web-ducg.onrender.com';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}