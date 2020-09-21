export const initialState = {
    basket : [
        
    ],
    user : null,
}

const reducer = (state = initialState , action) => {

    switch(action.type)
    {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        case "REMOVE_FROM_BASKET":

            //we cloned the basket
            let newBasket = [...state.basket];

            //check product is exist
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if(index >= 0 ){
                //item exist in basket , remove it
                newBasket.splice(index,1);
            }
            else
            {
                console.warn (`can't remove product (id: ${action.id})`);
            }

            return { ...state  , 
                basket : newBasket
            };

        default:
            return state;
    }
}

export default reducer;