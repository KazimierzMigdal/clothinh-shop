import CartActionTypes from './cart.types.js'

import { addItemToCart, removeItemFromCart} from './cart.utils.js';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                hidden: true,
                cartItems: []
            };
        case CartActionTypes.CLEAR_ITEM_FRON_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default cartReducer;