import {  Grid ,styled } from "@mui/material"
import { imageURL } from "../../Constants/data"


const Wrapper = styled(Grid)`

margin-top : 10px;

`
const Image = styled('img')(({theme})=>({
    marginTop : 10,
    width:'100%',
    [theme.breakpoints.down('md')] : {
        objectFit : 'cover',
        height : 120
    }
}))

const midSection =()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
            <Wrapper lg={12} sm={12} xm={12} md={12}  container>
               {
                imageURL.map( data=>(
                    <Grid item lg={4} sm={12} xm={12} md={4} >
                        <img src={data} alt="adimg" style={{width : "100%"}}/>
                    </Grid>
                ))
               }
            </Wrapper>
            <Image src={url} alt="ad" />
        </>
    )
}

export default midSection;