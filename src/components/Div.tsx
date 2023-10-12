import useCount from "../hooks/useCount";

const Div = () => {
  const [number, setNumber] = useCount(0);
  return (
    <div
      onMouseEnter={() => setNumber(number + 1)}
      style={{
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number}
    </div>
  );
};
export default Div;
