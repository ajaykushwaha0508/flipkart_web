import * as actionType from '../Contants/cartConstent';
const cartReducer=(state={cartItems : []} , action)=>{
       switch(action.type){
        case actionType.Add_TO_CART : 
              const item = action.payload;
              const exist = state.cartItems.find(product=>product.id === item.id);
              console.log(exist);

              if(exist){
                return{...state , cartItems: state.cartItems.map(data=> data.id === exist.id ? item : data ) }
            }else{
                  return{...state , cartItems: [...state.cartItems , item] }
              }

         case actionType.REMOVE_FROM_CART :
            return{ ...state , cartItems : state.cartItems.filter(product => product.id !== action.payload)};

        default :
            return state;
       }

}

export default cartReducer;