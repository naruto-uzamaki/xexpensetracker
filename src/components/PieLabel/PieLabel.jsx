import "./PieLabel.css";
function PieLabel({ name, color }) {
  console.log(name, color);
  return (
    <div className="pielabel">
      <span
        style={{ width: "2rem", height: "0.5rem", backgroundColor: color }}
      ></span>
      <span style={{ fontSize: "0.9rem" }}>{name}</span>
    </div>
  );
}

export default PieLabel;
