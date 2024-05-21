import { Badge, Box , Button, Typography , styled   } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from "../Home/loginDialog";
import { useState ,useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./profile";
import {Link} from 'react-router-dom';

import { useSelector } from "react-redux";
 

const Wrapper = styled(Box)(({theme})=>({
  display : 'flex',
  margin : '0 3% 0 auto',
  '& > button , & > p , & > div' : {
      marginRight : 40,
      fontSize : 16,
      alignItems : 'center',
  },
  [theme.breakpoints.down('md')] :{
    display : 'block'
  }
}))
   
    
    const Container = styled(Link)`
    text-Decoration : none;
    display : flex;
    color : inherit;
    `
    const LoginButton = styled(Button)`
      color : #2874f0;
      background : #ffffff;
      box-shadow : none;
      padding : 5px 40px;
      border-radius : 2px;
      text-transform : none;
      font-weight : 600;
      height : 32px;
    `

const CustomeButtons=()=>{

    const{account , setAccount} = useContext(DataContext);

    const [open , setOpen] = useState(false);
    const openDialog=()=>{
      setOpen(true);
    }

    const {cartItems} = useSelector(state => state.cart);
    return(
      <Wrapper>

        {
          account ? <Profile account={account} setAccount={setAccount} /> : 
          <LoginButton variant="contained" onClick={()=> openDialog()}>Login</LoginButton>

        }
         <Typography style={{marginTop :3 , width : 135}}>Become a Seller</Typography>
         <Typography style={{marginTop : 3}}>More</Typography>
         
         <Container to='/cart'>
          <Badge badgeContent={cartItems?.length} color="error">
            <ShoppingCart/>
          </Badge>
            <Typography style={{marginLeft : 10}}>Cart</Typography>
         </Container>
         <LoginDialog open={open} setOpen={setOpen}/>
      </Wrapper>

    )
}
export default CustomeButtons;