import { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

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

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
