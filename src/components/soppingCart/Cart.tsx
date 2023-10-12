import { Product } from "../../hooks/shoppingCartReducer";
import Button from "./Button";

interface Cart {
  total: number;
  state: Product[];
  restart: () => void;
}

const Cart = ({ total, state, restart }: Cart) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>MY CART</h1>
      <h2 style={{ textAlign: "center" }}>TOTAL: {total}$</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
          justifyItems: "center",
        }}
      >
        <h3>name - price - amount</h3>
        {state.map((product) => (
          <div key={product.id}>
            {product.amount > 0 && (
              <div>
                <p>
                  {product.name} - {product.price}$ - {product.amount}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button nameAction="restart" event={restart} />
    </div>
  );
};

export default Cart;
