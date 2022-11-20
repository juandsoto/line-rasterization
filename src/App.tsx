import { Map2D, Sidebar } from "components";
import useStore from "store";

function App() {
  const points = useStore(state => state.points);

  return (
    <div className="app">
      <Sidebar />
      <div className="app__right">
        <div className="header">
          <h1>Line Rasterization</h1>
          <div className="selected__points">
            {points.map(({ x, y }) => (
              <span>
                ({x},{y})
              </span>
            ))}
          </div>
        </div>
        <Map2D />
      </div>
    </div>
  );
}

export default App;
