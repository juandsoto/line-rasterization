import { Space } from "types";

const Coordinate = ({ x, y }: Space) => {
  return (
    <div
      style={{
        borderLeft: x === 0 ? "2px solid black" : "",
        borderBottom: y === 0 ? "2px solid black" : "",
      }}
      className="coordinate"
    >
      <span className="coordinate__tag">
        ({x},{y})
      </span>
    </div>
  );
};

export default Coordinate;
