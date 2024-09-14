const colorDefaults = ["purple", "red", "teal", "green"];

const ColorArray = ({ colors = colorDefaults }) => {
  return (
    <div className="my-4">
      <h2 className="text-3xl">Colors</h2>
      <ul>
        {colors.map((c) => (
          <li style={{ color: c }}> {c} </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorArray;
