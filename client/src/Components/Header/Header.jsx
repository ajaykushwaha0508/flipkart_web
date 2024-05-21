import { AppBar , Box, Toolbar , Drawer ,List , ListItem ,  IconButton , Typography, styled} from "@mui/material";
import Search from "./Search";
import CustomeButtons from "./CustomeButtons";
import { Link } from "react-router-dom";
import {Menu} from '@mui/icons-material';
import { useState } from "react";
const StyleHeader = styled(AppBar)`
background : #2874f0;
height : 55px;
`

const Component = styled(Link)`
margin-left : 12%;
line-height : 0;
 text-decoration : none;
 color : inherit;
`

const SubHeading = styled(Typography)`
   font-size : 10px ;
   font-style : italic;
`
const PlusImg = styled('img')({
  height : 10,
  marginLeft : 3,
  width : 10
})

const CustomButtonWrapper = styled(Box)(({theme})=>({
  margin : '0 2% 0 auto',
  [theme.breakpoints.down('md')] : {
    display : 'none'
  }
}))

const MenuButton = styled(IconButton)(({theme}) =>({
     display : 'none',
     [theme.breakpoints.down('md')] : {
      display  : 'block'
     }
}))





const Header=()=>{
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  
  const [open , setOpen ] = useState(false);

const openhandle=()=>{
  setOpen(true);
}
const closehandle=()=>{
  setOpen(false);
}
const list =()=>(
  <Box onClick={closehandle}>
     <List>
       <ListItem button > 
             <CustomeButtons/>
       </ListItem>
     </List>
  </Box>
);
  
  return(
      
       <StyleHeader>
         <Toolbar style={{minHeight : 55}}>
          
         <MenuButton color="inherit" onClick={openhandle}>
            <Menu />
          </MenuButton>
          
          <Drawer open={open} onClose={closehandle} >
             {list()}
            </Drawer>
                
                <Component to='/' >
                     <img src={logoURL} style={{width : "75px"}} alt="img"/>

                     <Box style={{display : "flex"}}>
                        <SubHeading>Explore &nbsp; 
                         <Box component="span" style={{color : "#FFE500"}}>Plus</Box>
                          </SubHeading>
                          <PlusImg src={subURL}/>
                     </Box>
                </Component>

                <Search/>

                <CustomButtonWrapper>
                <CustomeButtons/>
                </CustomButtonWrapper>
         </Toolbar>
       </StyleHeader>
       
    )
}
export default Header;