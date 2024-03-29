import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        getCart: (state, action)=> {
          if (localStorage && localStorage.getItem('cart')) {
            state.items = JSON.parse(localStorage.getItem('cart'));

          } else {
            state.items = [];
          }
        },
        addToCart: (state, action) => {
            const itemExists = state.items.find((item) => item.id === action.payload.id);
            if (itemExists) {
              itemExists.quantity++;
            } else {
              state.items = [...state.items, { ...action.payload, quantity: 1 }]
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
          },

        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.quantity++;
            
            localStorage.setItem('cart', JSON.stringify(state.items));
          }, 
          
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              const index = state.items.findIndex((item) => item.id === action.payload);
              state.items.splice(index, 1);
            } else {
              item.quantity--;
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
          },

        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (item)=> item.id === action.payload
            );

            let newCart = [...state.items]
           
            if(index >= 0){
              newCart.splice(index, 1);
            }else{
                console.warn(`can't remove product (id: ${action.payload.id}) as is not in the cart`)
            }

            state.items = newCart;
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, getCart } = cartSlice.actions;

//Selectors- this is how we pull information from the global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state)=> state.cart.items.reduce((total,item)=> total + item.price*item.quantity, 0)

export default cartSlice.reducer;