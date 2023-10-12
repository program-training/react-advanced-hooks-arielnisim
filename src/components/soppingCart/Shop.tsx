import { Product } from "../../hooks/shoppingCartReducer";
import CardProduct from "./CardProduct";

type Props = {
  state: Product[];
  addAnount: (id: number) => void;
  removeAnount: (id: number) => void;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Shop = ({ state, addAnount, removeAnount, total, setTotal }: Props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>SHOP</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {state.map((product) => (
          <div>
            <CardProduct
              amount={product.amount}
              name={product.name}
              price={Number(product.price)}
              id={product.id - 1}
              addAnount={addAnount}
              removeAnount={removeAnount}
              setTotal={setTotal}
              total={total}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
