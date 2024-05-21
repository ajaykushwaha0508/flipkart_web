import { InputBase , Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import {useSelector , useDispatch} from 'react-redux';
import {getProducts} from '../../Redux/Actions/getProductAction';
import { Link } from "react-router-dom";



const SeacrhContainer = styled(Box)`
background-color : #ffff;
width : 38%;
display : flex;
margin-left : 10px;
border-radius : 2px;
`

const InputSearchBase = styled(InputBase)`
padding-left : 20px;
width : 100%;
`

const SearchIconWrapper = styled(Box)`
         color : blue;
         padding : 5px;
         display : flex;
`
const ListWrapper = styled(List)`
    position : absolute;
    background : #ffffff;
    color : #000;
    margin-top : 36px; 
`

const Search=()=>{
  const [text , setText] = useState('');

    const {Products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();  
    useEffect(()=>{
        dispatch(getProducts());
    } , [dispatch])
    const getText=(text)=>{
            setText(text);
      }
      


    return(
            <SeacrhContainer>
                <InputSearchBase
                  placeholder='Search for products , barnds and more'
                  onChange={(e)=> getText(e.target.value)}
                  value={text}
                />
              <SearchIconWrapper>
              <SearchIcon/>
              </SearchIconWrapper>
              {
                text&&
                <ListWrapper>
                  {
                    Products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                      <ListItem>
                        <Link 
                        to={`product/${product.id}`} 
                        onClick={()=> setText('')}
                        style={{textDecoration : 'none' , color : 'inherit'}} 
                        >
                        {product.title.longTitle}
                        </Link>
                      </ListItem>
                    ))
                  }
                </ListWrapper>
              }
            </SeacrhContainer>
    )
}
export default Search;