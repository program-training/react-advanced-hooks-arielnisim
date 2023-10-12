type Props = {
  nameAction: "+" | "-" | "restart";
  event: () => void;
};

const Button = ({ nameAction, event }: Props) => {
  return <button onClick={event}>{nameAction}</button>;
};

export default Button;
