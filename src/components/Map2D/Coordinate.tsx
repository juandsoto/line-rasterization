import { useCallback } from "react";
import useStore from "store";
import { Space } from "types";

const Coordinate = ({ x, y }: Space) => {
  const { points, setPoints, results } = useStore();

  const handlePoint = () => {
    if (!!points.find(p => p.x === x && p.y === y)) {
      setPoints(points.filter(p => p.x !== x && p.y !== y));
      return;
    }
    if (points.length === 2) return;
    setPoints([...points, { x, y }]);
  };

  const getBgColor = useCallback((): string => {
    let color = "";
    if (results.length) {
      color = !!results.find(p => p.x === x && p.y === y) ? "#0984e3" : color;
    }
    color = !!points.find(p => p.x === x && p.y === y) ? "#aaa" : color;
    return color;
  }, [points, results]);

  return (
    <div
      style={{
        borderLeft: x === 0 ? "2px solid black" : "",
        borderBottom: y === 0 ? "2px solid black" : "",
        backgroundColor: getBgColor(),
      }}
      className="coordinate"
      onClick={handlePoint}
    >
      <span className="coordinate__tag">
        ({x},{y})
      </span>
    </div>
  );
};

export default Coordinate;
