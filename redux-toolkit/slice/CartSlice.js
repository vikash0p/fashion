const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: [],
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {

            console.log(action.payload);
            
            const cartisExist = state.cart.find((value) => value.id === action.payload.id);
            if (cartisExist) {

              state.cart=  state.cart.map((value) => value.id === action.payload.id ? { ...value, qty: value.qty + 1 } : value)

            }
            else {

                state.cart.push(action.payload);
            }
        },
        removeToCart(state, action) {
            console.log(action.payload);

            state.cart = state.cart.filter((value, index, arr) => value.id !== action.payload.id);
        },
        incrementQty(state,action){

         state.cart =   state.cart.map((value) => value.id === action.payload.id ? { ...value, qty: value.qty + 1 } : value)

        },
        decreaseQty(state, action) {

           state.cart= state.cart.map((value) => value.id === action.payload.id ? { ...value, qty: value.qty - 1 } : value)

        },
    }

})
export const { addToCart, removeToCart, incrementQty,decreaseQty } = CartSlice.actions;
export default CartSlice.reducer;
