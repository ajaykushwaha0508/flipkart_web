import * as actionType from "../Contants/productsConstent"

export const getProductsReducers =(state={Products : []} , action)=> { // dipatch ke dwara pass ki gai value action main ati hai
                    switch(action.type){
                            case actionType.GET_PRODUCTS_SUCCESS : 
                                 return {Products : action.payload};
                            case actionType.GET_PRODUCTS_FAIL :
                                return {err : action.payload};
                            default :
                                 return state                
                    }
}

export const getProductDetailReducer = (state={product : {}} ,  action)=>{
     switch(action.type){
          case actionType.GET_PRODUCT_DETAILS_REQUEST : 
             return {loading : true};
          case actionType.GET_PRODUCT_DETAILS_SUCCESS :
               return {loading : false , product : action.payload};
          case actionType.GET_PRODUCT_DETAILS_FAIL :
               return{loading : false , error : action.payload};
          case actionType.GET_PRODUCT_DETAILS_RESET : 
               return {product : {}};
          default :
               return state;

     }
}
