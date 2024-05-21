import { useState  , useContext } from "react";
import { Button,Box,styled, Dialog, TextField, Typography } from "@mui/material"
import { authenticateSignup , authenticateLogin } from "../../service/api";

import { DataContext } from "../../Context/DataProvider";

const Component = styled(Box)`
height : 70vh;
width : 90vh;
`;

const Image = styled(Box)`
background : #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat  ;
height : 83.71%;
width : 28%;
padding : 35px 35px;
& > p , & > h5{
color : #FFFFFF;
font-weight : 600; 
}
`;

const Wrapper = styled(Box)`
display : flex;
flex-direction : column;
padding : 10px 35px;
flex : 1;
& > div , & > p , & > button{
margin-top:10px; 
}
`;

const LoginButton = styled(Button)`
text-transform : none;
background : #FB641B;
color : #fff;
height : 48px;
border-radius : 2px;
`;
const RequestOTP = styled(Button)`
text-transform : none;
background : #fff;
color : #2874f0;
height : 48px;
border-radius : 2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
font-size : 12px ;
color : #878787;
`;
const CreateAccount = styled(Typography)`
font-size : 14px;
text-align : center ;
color : #2874f0;
font-weight : 600;
cursor : pointer; 
`;

const Error = styled(Typography)`
    font-size : 12px;
    color : #ff6161;
    margin-top : 10px;
    font-weight : 600;

`

const LoginDialog = ({open , setOpen})=>{
    

    const signUpIntialValue = {
        firstname : "",
        lastname : "",
        username : "",
        password : "",
        email : "",
        phone : "",
    };

    const loginIntialValue = {
        username : '',
        password : ''
    }

    const accountIntialValues = {
        login : {
            view : 'login',
            heading : "Login",
            subHeading : "Get access to your Orders , Wishlist and Recommendations"            
        },
        signup : {
            view : 'signup',
            heading : "Looks like you're new here!",
            subHeading : "Sign up with your mobile number to get started "
        }
    } 

    const [account , toggleAccount] = useState(accountIntialValues.login);
    const [signup , setSignup]  = useState(signUpIntialValue);
    
    const [login , setLogin] =useState(loginIntialValue);
    const {setAccount} = useContext(DataContext);
    const [error , setError] = useState(false);  
    const onInputchange=(e)=>{

       setSignup({...signup , [e.target.name] : e.target.value});
    }

    const toggleSignUp=()=>{
            toggleAccount(accountIntialValues.signup);
    }
    
    const closeHandle=()=>{
            setOpen(false);
            toggleAccount(accountIntialValues.login);
            setError(false);
    }

    const usersignup = async ()=>{
         let response = await authenticateSignup(signup);
         if(!response) return;
         closeHandle(); 
         setAccount(signup.firstname);
    }

    const onValuechange=(e)=>{
        setLogin({...login , [e.target.name] : e.target.value});
        
    }

  const loginuser=   async()=> {
         let response = await authenticateLogin(login);
        
         if(response.status === 200){
            closeHandle();
            setAccount(response.data.data.firstname);
         }else{
            setError(true);
         }
  }


    return(
        <Dialog open={open} onClose={closeHandle}  PaperProps={{ sx: { maxWidth: 'unset' }}}>

             <Component>
                <Box style={{display : 'flex' , height : '100%'}}>
                    <Image>
                            <Typography variant="h5">{account.heading}</Typography>
                            <Typography style={{marginTop : 20}}>{account.subHeading}</Typography>
                    </Image>
                   
                        { 
                             account.view === 'login'?
                                                       
                             <Wrapper>
                            <TextField   label="Enter Username" onChange={(e)=> onValuechange(e)} name ="username" variant="standard" />
                            {error && <Error>Please enter valid username and password</Error>}
                            <TextField label="Enter Password"  onChange={(e)=> onValuechange(e)} name="password" variant="standard" />
                            <Text>By continuing, you agree to flipkart's Terms of Use and Privacy Policy</Text>
                            <LoginButton onClick={loginuser}>Login</LoginButton>
                            <Typography style={{textAlign : "center"}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={()=> toggleSignUp()}>New to flipkart? Create an account </CreateAccount>
                            </Wrapper>
                        :

                            <Wrapper>
                            <TextField label="Enter Firstname"    onChange={(e)=> onInputchange(e)} name="firstname" variant="standard" />
                            <TextField label="Enter Lastname"   onChange={(e)=> onInputchange(e)} name="lastname" variant="standard" />
                            <TextField label="Enter Username"    onChange={(e)=> onInputchange(e)} name="username" variant="standard" />
                            <TextField label="Enter Email"        onChange={(e)=> onInputchange(e)} name="email" variant="standard" />
                            <TextField label="Enter Password"      onChange={(e)=> onInputchange(e)} name="password" variant="standard" />
                            <TextField label="Enter Phone number"  onChange={(e)=> onInputchange(e)} name="phone" variant="standard" />                       
                            <LoginButton onClick={()=>usersignup()}  >Request OTP</LoginButton>
                            </Wrapper>   
                       
                        
                        }
                        
                   
                </Box>
             </Component>
        </Dialog>
    )
}
export default LoginDialog;

