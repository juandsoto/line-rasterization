import { Space } from "types";
import create from "zustand";

interface Store {
  space: Space;
  setSpace: (space: Space) => void;
}

const useStore = create<Store>(set => ({
  space: { x: 30, y: 30 },
  setSpace: (space: Space) => set(state => ({ ...state, space })),
}));

export default useStore;
