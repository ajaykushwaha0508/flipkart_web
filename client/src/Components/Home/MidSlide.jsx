import { Box, styled } from "@mui/material"
import Slide from "./Slide";
const Component = styled(Box)`
  display : flex;
`;
const LeftComonent  = styled(Box)(({theme})=>({
    width : '83%',
    [theme.breakpoints.down('md')] : {
    width : '100%'
       }
}))

const RightComonent  = styled(Box)(({theme})=>({

    width : '17%',
    backgroundColor : '#FFFFFF',
   padding : 5,
   textAlign : 'center',
   marginTop : 10,
   marginLeft : 8,

   [theme.breakpoints.down('md')] : {
    display : 'none'
   }

}));


const MidSlide =({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
            <LeftComonent>
            <Slide products={products} title={title} timer={timer}/>
            </LeftComonent>
            <RightComonent>
                    <img src={adURL} alt="adImg" style={{width : 212}}/>
            </RightComonent>
        </Component>
    )
}
export default MidSlide;