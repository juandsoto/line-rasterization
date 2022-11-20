import useStore from "store";
import Coordinate from "./Coordinate";

const Map2D = () => {
  const space = useStore(state => state.space);

  return (
    <div
      className="map__2d"
      style={{
        gridTemplateColumns: `repeat(${space.y}, 1fr)`,
        gridTemplateRows: `repeat(${space.x}, 1fr)`,
      }}
    >
      {Array.from(Array(space.x * space.y).keys()).map(c => (
        <Coordinate
          x={(c % space.y) + Math.round(space.y / 2) - space.y + 1}
          y={(Math.floor(c / space.y) - Math.round(space.x / 2)) * -1}
        />
      ))}
    </div>
  );
};

export default Map2D;
