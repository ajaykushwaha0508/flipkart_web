import { useDispatch ,useSelector } from "react-redux";
import { useEffect } from "react"; 
import { useParams } from "react-router-dom";
import {getProductDetails} from '../../Redux/Actions/getProductAction';
import ProductDetail from "./productDeatil";
import { Box, styled , Grid} from "@mui/material";
import ActionItem from "./ActionItem";
const DetailView = ()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const {loading , product}=useSelector(state => state.getProductDetails);
    useEffect(()=>{
        
        if(product && id!== product.id){
            dispatch(getProductDetails(id));
        }
      
} , [dispatch , id , loading , product ])

const Component = styled(Box)`
    background-color : #F2F2F2F2;
`;
const Container = styled(Grid)(({theme}) => ({
    backgroundColor : '#FFFFFF',
    [theme.breakpoints.down('md')] : {
        margin : 0
    }
}));


const RightContainer = styled(Grid)`
margin-top : 55px;
margin-left : 10px;
`

    return(    
        <Component>
              { product && Object.keys(product).length &&
                <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product}/>
                        </Grid>
                        <RightContainer item lg={7} md={7} sm={7} xs={12}>
                            <ProductDetail product={product}/>
                        </RightContainer>
                </Container>
              }
        </Component>
    
    )
}

export default DetailView;