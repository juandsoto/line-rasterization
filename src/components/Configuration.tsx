import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import useStore from "store";

const Configuration = () => {
  const { space, setSpace } = useStore();

  const handleAxisSize = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpace({ ...space, [name]: value });
  };

  return (
    <div className="configuration">
      <TextField
        type="number"
        onChange={handleAxisSize}
        name="x"
        value={space.x}
        id="x-axis"
        label="X Axis"
        variant="outlined"
      />
      <TextField
        type="number"
        onChange={handleAxisSize}
        name="y"
        value={space.y}
        id="y-axis"
        label="Y Axis"
        variant="outlined"
      />
    </div>
  );
};

export default Configuration;
