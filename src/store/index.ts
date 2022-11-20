import { Algorithm, Point, Space } from "types";
import create from "zustand";

interface Store {
  space: Space;
  setSpace: (space: Space) => void;
  algorithm: Algorithm;
  setAlgorithm: (algorithm: Algorithm) => void;
  points: Point[];
  setPoints: (points: Point[]) => void;
  results: Point[];
  setResults: (results: Point[]) => void;
  clear: () => void;
  canDraw?: () => boolean;
}

const useStore = create<Store>(set => ({
  space: { x: 30, y: 45 },
  setSpace: (space: Space) => set(state => ({ ...state, space })),
  algorithm: "BASIC",
  setAlgorithm: (algorithm: Algorithm) => set(state => ({ ...state, algorithm })),
  points: [] as Point[],
  setPoints: (points: Point[]) => set(state => ({ ...state, points })),
  results: [],
  setResults: (results: Point[]) =>
    set(state => ({
      ...state,
      results: [...state.results, ...results],
    })),
  clear: () => set(state => ({ ...state, points: [], results: [] })),
}));

export default useStore;
