
//components
import { Box } from '@mui/material';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DetailView from './Components/Details/DetailView';
import DataProvider from './Context/DataProvider';
import Cart from './Components/cart/Cart';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import PaymentSuccesssful from './Components/payment/PaymentSuccesssful';

function App() {
  return (


    <DataProvider> 
      <BrowserRouter>
          <Header/>
          <Box style={{marginTop : 54}}>
              <Routes>

             <Route path='/'  element={<Home/>} />
             <Route path='/product/:id' element={<DetailView/>}/>
             <Route path='/cart' element={<Cart/>}/>
             <Route path='/paymentsuccess' element={<PaymentSuccesssful/>}/>

              </Routes>
          </Box> 
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
