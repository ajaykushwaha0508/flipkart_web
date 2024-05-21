import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import { bannerData } from '../../Constants/data';
import { styled } from '@mui/material';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Image = styled('img')(({theme}) =>({

  width : "100%",
  height : 280,
  [theme.breakpoints.down('md')] : {
     objectFit : 'cover',
     height : 180
  }
}))


const Banner =()=>{
    return(
       
         <Carousel 
         responsive={responsive}
         swipeable={false}
         draggable={false}
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container"
         >
            {
                bannerData.map(data=>(
                    <Image src={data.url} alt="bannerImg"  />
                ))
            }
         </Carousel>
       
    )
}
export default Banner;