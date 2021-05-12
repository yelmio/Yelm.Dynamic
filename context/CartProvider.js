import { useReducer, createContext, useState } from "react";

const CartContext = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // const updatedCart = [...state]
      // const updatedItemIndex = updatedCart.findIndex(
      //   item => item.id === action.item.id
      // );
      // if (updatedItemIndex < 0) {
      //   updatedCart.push({ ...action.item, quantity: 1 });
      // } else {
      //   const updatedItem = {
      //     ...updatedCart[updatedItemIndex]
      //   };
      //   updatedItem.quantity++;
      //   updatedCart[updatedItemIndex] = updatedItem;
      // }
      // // console.log("cart: " + updatedCart, "Товар: " + updatedItemIndex); 
      // return [...state, updatedCart]; 
      return [...state, action.item]; 
		break;
    case "DELETE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
		break;
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [popup, setPopup] = useState(false)

  return (
    <CartContext.Provider value={{cart: {state, dispatch}, popup: {popup, setPopup}}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
