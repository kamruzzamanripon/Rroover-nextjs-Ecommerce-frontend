import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    decrementQuantity,
    incrementQuantity, removeFromCart, selectItems,
    selectTotal
} from "../store_slices/cartSlice";

const useCartHook = (id) => {

  const dispatch = useDispatch();
  const [cartQuantity, setCartQuantity] = useState(0);
  const cartItems = useSelector(selectItems);
  const Total = useSelector(selectTotal);
  //console.log("state cart",id )
  //console.log(cartItems )

  const addItemToCart = (productInfo) => {
    dispatch(addToCart(productInfo));
  };

  const increaseProduct = (id) => {
    dispatch(incrementQuantity(id));
  };

  const decrementProduct = (id) => {
    setCartQuantity(cartQuantity - 1);
    dispatch(decrementQuantity(id));
  };

  const deleteProduct = (id)=>{
    dispatch(removeFromCart(id));
}


  useEffect(() => {

    cartItems.map((item, index) => {
      if (id === item.id) {
        setCartQuantity(item.quantity);
      }
   
    });

    // cartItems.map((item, index) => {
    //   if (id !== item.id) {
    //     setCartQuantity(0);
    //   }
    // },[cartItems]);
   
    
  },[cartItems, id]);

    return {
        cartQuantity,
        cartItems,
        Total,
        addItemToCart,
        increaseProduct,
        decrementProduct,
        deleteProduct
    };
};

export default useCartHook;