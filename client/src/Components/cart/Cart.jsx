import { Box, Typography , Grid, styled ,Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";

import { checkoutHandler } from "../Details/ActionItem";

const Container = styled(Grid)(({theme})=>({
    padding : '30px 135px',
    [theme.breakpoints.down('md')] :{
        padding : '15px 0',
    }

}))

const Header = styled(Box)`
padding : 15px 24px;
background : #fff; 
`;

const ButtonWrapper = styled(Box)`
     padding : 16px 22px ;
     background : #fff;
     box-shadow : 0 -2px 10px 0 rgb(0 0 0 / 10%);
     border-top : 1px solid #f0f0f0; 
`;

const StyledButton = styled(Button)`
display : flex;        
margin-left : auto ; 
background : #fb641b;
color : #fff;
border-radius : 2px ;
width : 250px ;
height : 51px;
`;
// see here the display and margin 


const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight : 15,
    [theme.breakpoints.down('md')] : {
        marginBottom : 15,
    }

}))

const Cart=()=>{

    const {cartItems} = useSelector(state => state.cart);

    let total_amount = 0;
    let price= 0;
    let discount =  0;


    useEffect(()=>{
                for(const item of cartItems){ // to get the total amount of cart items 
                    price += item.price.mrp;
                    discount += item.price.mrp-item.price.cost;
                    total_amount=price-discount;
                };

                console.log(total_amount+40);
    } ,[cartItems.length]);

    

   return(
       <>
          {
            cartItems.length ?
            <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                <CartItems item={item}/>
                            ))
                        }

                        <ButtonWrapper>
                            <StyledButton onClick={()=>checkoutHandler(cartItems , total_amount+40)}>PLACE ORDER</StyledButton>
                        </ButtonWrapper>
                        
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}/>
                    </Grid>
            </Container>
            :
               <EmptyCart/>
          }
       </>
   )
}

export default Cart;