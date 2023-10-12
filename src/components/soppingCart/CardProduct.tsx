import Button from "../soppingCart/Button";

type Props = {
  id: number;
  addAnount: (id: number) => void;
  removeAnount: (id: number) => void;
  name: string;
  price: number;
  amount: number;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const CardProduct = ({
  id,
  name,
  price,
  amount,
  addAnount,
  removeAnount,
  total,
  setTotal,
}: Props) => {
  return (
    <div
      style={{
        height: "250px",
        width: "150px",
        border: "3px solid red",
        margin: "10px",
      }}
    >
      <h1>{name}</h1>
      <p>{price} $</p>

      <button
        onClick={() => {
          addAnount(id);
          setTotal(total + price);
        }}
      >
        +
      </button>
      <div>{amount}</div>
      <button
        onClick={() => {
          removeAnount(id);
          {
            amount > 0 && setTotal(total - price);
          }
        }}
      >
        -
      </button>
    </div>
  );
};
export default CardProduct;
