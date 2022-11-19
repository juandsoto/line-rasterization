import { Map2D, Sidebar } from "components";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__right">
        <h1>Line Rasterization</h1>
        <Map2D />
      </div>
    </div>
  );
}

export default App;
