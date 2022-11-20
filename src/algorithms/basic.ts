import { Point } from "types";

function basic(p1: Point, p2: Point) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  let m = dy / dx;
  let x = p1.x;
  let y = p1.y;

  let result: Point[] = [{ x, y }];
  while (x < p2.x || y < p2.y) {
    x++;
    y = y + m;
    result.push({ x, y: Math.round(y) });
  }
  console.log(result);
  return result;
}

export default basic;
