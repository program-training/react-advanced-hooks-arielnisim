import useCount from "../hooks/useCount";

type Props = {
  color: string;
};

const Button = ({ color }: Props) => {
  const [number, setNumber] = useCount(0);
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        click ne
      </button>
      <div>{number}</div>
    </div>
  );
};
export default Button;
