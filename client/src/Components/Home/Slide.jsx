import { Box, Button, Divider, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import CountDown from 'react-countdown';
import { Link } from "react-router-dom";



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Component = styled(Box)`
     margin-top : 10px;
     background-color : #ffffff;
  `;

  const Deal = styled(Box)`
       padding : 15px 20px ;
       display : flex;
       align-items : center;
  `;

  const Timer = styled(Box)`
    display : flex;
    align-items : center;
    color : #7f7f7f;
    margin-left : 10px;
  `;

  const DealText = styled(Typography)`
    font-weight : 600;
    font-size : 22px;
    margin- right : 25px ;
    line-height : 32px; 
  `;

  const ViewAllButton = styled(Button)`
     margin-left : auto;
     background-color : #2874f0;
     font-weight : 600;
     font-size : 13px;
  `


  const Image = styled('img')({
    height : 150,
    width : "auto"
  })

  const Text = styled(Typography)`
     font-size : 12px ;
     margin-top : 5px;
      
  `


const Slide =({products , title , timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer =({hours , minutes , seconds})=>{
        return(
            <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
        )
    }

    return(
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                   timer &&   <Timer>
                                    <img src={timerURL} alt="timer" style={{width : 24}} />
                                    <CountDown date={Date.now() + 5.04e+7} renderer={renderer}  />
                                </Timer>
                }
               
                <ViewAllButton variant="contained" color="primary" >View All</ViewAllButton>
                
            </Deal>
            <Divider/>

           <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            centerMode={true}
            keyBoardControl={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
           >
                {
                
                products.map(product=>(

                   <Link to={`product/${product.id}`} style={{textDecoration : 'none'}}>
                    <Box textAlign="center" style={{padding : "25px 15px"}}>
                    <Image src={product.url} alt="product"/>
                    <Text style={{fontWeight : 600 , color : "#212121" , }}>{product.title.shortTitle}</Text>
                    <Text style={{color : 'green'}}>{product.discount}</Text>
                    <Text style={{color:"#7f7f7f"}}>{product.tagline}</Text>
                    </Box>
                   </Link>
                ))

                }
           </Carousel>
         </Component>
    )
}
export default Slide;