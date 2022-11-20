import { Button } from "@mui/material";
import Algorithms from "./Algorithms";
import Axis from "./Axis";
import useStore from "store";
import { basic, bresenham, bresenhamCircle, dda, midPoint } from "algorithms";
import { Algorithm } from "types";

const Configuration = () => {
  const { algorithm, points, setResults, setPoints, clear } = useStore(state => state);

  const handleDrawing = () => {
    const init: Record<Algorithm, Function> = {
      BASIC: () => basic(points[0], points[1]),
      BRESENHAM: () => bresenham(points[0], points[1]),
      DDA: () => dda(points[0], points[1]),
      MIDPOINT: () => midPoint(points[0], points[1]),
      BRESENHAM_CIRCLE: () => bresenhamCircle(points[0], points[1]),
    };

    setResults(init[algorithm]());
    setPoints([]);
  };

  return (
    <>
      <div className="configuration">
        <Axis />
        <Algorithms />
      </div>
      <div className="btn__container">
        <Button onClick={clear} color="error">
          Clear
        </Button>
        <Button onClick={handleDrawing} disabled={points.length !== 2}>
          Draw
        </Button>
      </div>
    </>
  );
};

export default Configuration;
