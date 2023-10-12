import { useState } from "react";

const useCount = (
  numberDef: number
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const [number, setNumber] = useState(numberDef);
  return [number, setNumber];
};

export default useCount;
