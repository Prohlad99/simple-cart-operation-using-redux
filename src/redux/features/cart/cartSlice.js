import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const selectedItem = state.cart.find(item => item.id === action.payload.id);
            if(selectedItem){
                selectedItem.quantity += 1;
                state.cart = state.cart.filter(item => item.id !== selectedItem.id);
                state.cart.push(selectedItem);
            }else{
                const item = action.payload;
                item.quantity = item.quantity + 1
                state.cart.push({...item, position:state.cart.length})
            }
        },

        removeFromCart: (state, action)=>{
            const selectedItem = state.cart.find(item => item.id === action.payload);

            if(selectedItem.quantity > 1){
                selectedItem.quantity -= 1;
                state.cart = state.cart.filter(item => item.id !== selectedItem.id);
                state.cart.push(selectedItem);
            }else{
                state.cart = state.cart.filter(item => item.id !== action.payload);
            }
        },

        clearCart:(state)=>{
            state.cart = []
        }

        

    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer