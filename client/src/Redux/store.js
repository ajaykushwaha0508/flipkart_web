import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getProductsReducers , getProductDetailReducer} from './Reducers/getProductsReducer';
import cartReducer from './Reducers/cartReducer';
import thunk from 'redux-thunk'; //it is a middleware

const reducer = combineReducers({ // it is use to combine all the reducers.
    getProducts : getProductsReducers , 
    getProductDetails : getProductDetailReducer,
    cart : cartReducer
})
// npm i redux , thunk , redux-devtool-extension , react-redux


const middleware = [thunk];

const store = createStore( // it take two values one is rootreducer ans second is middleware .

    reducer ,
    composeWithDevTools(applyMiddleware(...middleware)) // in this function we pass middleware as a argum.

)

export default store;