import { useReducer, createContext, useState } from "react";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.find((item) => item.name === action.item.name)
        ? state.map((item) =>
            item.name === action.item.name
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          )
        : [...state, { ...action.item, quantity: 1 }]; 
		break;
    case "DELETE_ITEM":
      return state.find((item) => item.name === action.item.name)?.quantity ===
        1
        ? state.filter((item) => item.name !== action.item.name)
        : state.map((item) =>
            item.name === action.item.name
              ? {
                  ...item,
                  quantity: item.quantity - 1
                }
              : item
          );
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