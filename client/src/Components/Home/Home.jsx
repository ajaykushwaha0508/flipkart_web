import { Box, styled } from "@mui/material";
import Navbar from "./Navbar";
import { useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'; 
import Banner from "./Banner";
import { getProducts } from "../../Redux/Actions/getProductAction";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./midSection";

const Component = styled(Box)`
padding : 10px;
background : #F2F2F2;
`

const Home =()=>{

    const dispatch = useDispatch();
    let {Products} = useSelector(state => state.getProducts); // to get the store  data(getProducts in not a action it is a key that is present in rootreducer in store  )
    useEffect(()=>{
        // getProducts(); // we can't call this dispath action directly  
                         //because doing  this dipatch going undefined to solve this we use useDispatch hook
        dispatch(getProducts());  
    } ,[dispatch]);

    return(
        <>
        <Navbar/>        
        <Component>
         <Banner/>
         <MidSlide products={Products} title="Deals of the Day" timer={true}/>
         <MidSection/>
         <Slide products={Products} title="Discounts for You" timer={false}/>
         <Slide products={Products} title="Suggesting Items" timer={false}/>
         <Slide products={Products} title="Top Selection " timer={false}/>
         <Slide products={Products} title="Recommended Items" timer={false}/>
         <Slide products={Products} title="Trending Offers" timer={false}/>
         <Slide products={Products} title="Season's top picks" timer={false}/>
         <Slide products={Products} title="Top Deals on Accessories " timer={false}/>
        </Component >
        </>
    )
}

export default Home;