import products from "../utile/products";

export interface Product {
  id: number;
  name: string;
  price: string;
  amount: number;
}

interface Action {
  type: "add" | "remove" | "restart";
  payload: number;
}

export const initialCart: Product[] = products;

export const reducer = (currentState: Product[], action: Action) => {
  if (action.type === "add") {
    currentState[action.payload].amount++;
    return [...currentState];
  }
  if (action.type === "remove" && currentState[action.payload].amount > 0) {
    currentState[action.payload].amount--;
    return [...currentState];
  }
  if (action.type === "restart") {
    currentState.map((product) => (product.amount = 0));
    return [...currentState];
  }
  return [...currentState];
};
