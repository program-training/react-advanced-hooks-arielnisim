import Cart from "./Cart";
import { initialCart, reducer } from "../../hooks/shoppingCartReducer";
import { useReducer, useState } from "react";
import Shop from "./Shop";

const SoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialCart);
  const [total, setTotal] = useState(0);
  const addAnount = (id: number) => dispatch({ type: "add", payload: id });
  const removeAnount = (id: number) =>
    dispatch({ type: "remove", payload: id });
  const restart = () => {
    dispatch({ type: "restart", payload: NaN });
    setTotal(0);
  };

  return (
    <div>
      <Cart total={total} state={state} restart={restart} />
      <Shop
        state={state}
        addAnount={addAnount}
        removeAnount={removeAnount}
        setTotal={setTotal}
        total={total}
      />
    </div>
  );
};
export default SoppingCart;
