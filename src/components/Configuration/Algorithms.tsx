import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import useStore from "store";
import { Algorithm } from "types";

const Algorithms = () => {
  const { algorithm, setAlgorithm } = useStore();

  const handleChange = (e: SelectChangeEvent) => setAlgorithm(e.target.value as Algorithm);

  return (
    <div>
      <span>Algorithms</span>
      <div className="configuration__algorithms">
        <FormControl fullWidth>
          <InputLabel id="select-algorithm-label">Algorithm</InputLabel>
          <Select
            labelId="select-algorithm-label"
            id="select-algorithm"
            value={algorithm}
            label="Algorithm"
            onChange={handleChange}
          >
            <MenuItem value="BASIC">Basic</MenuItem>
            <MenuItem value="DDA">DDA</MenuItem>
            <MenuItem value="BRESENHAM">Bresenham</MenuItem>
            <MenuItem value="MIDPOINT">Mid Point Circle</MenuItem>
            <MenuItem value="BRESENHAM_CIRCLE">Bresenham Circle</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Algorithms;
