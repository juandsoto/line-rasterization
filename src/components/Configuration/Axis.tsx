import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import useStore from "store";

const Axis = () => {
  const { space, setSpace } = useStore();

  const handleAxisSize = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpace({ ...space, [name]: value });
  };

  return (
    <div>
      <span>Axis</span>
      <div className="configuration__axis">
        <TextField
          type="number"
          onChange={handleAxisSize}
          name="x"
          value={space.x}
          InputProps={{ inputProps: { min: 10 } }}
          id="x-axis"
          label="X Axis"
          variant="outlined"
        />
        <TextField
          type="number"
          onChange={handleAxisSize}
          name="y"
          value={space.y}
          InputProps={{ inputProps: { min: 10 } }}
          id="y-axis"
          label="Y Axis"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Axis;
