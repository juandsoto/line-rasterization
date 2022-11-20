import { Point } from "types";

function bresenham(p1: Point, p2: Point) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  let pk = 2 * dy - dx;
  let x = p1.x;
  let y = p1.y;

  let result: Point[] = [{ x, y }];
  while (x < p2.x || y < p2.y) {
    if (pk < 0) {
      pk = pk + 2 * dy;
      x++;
    } else {
      pk = pk + 2 * dy - 2 * dx;
      x++;
      y++;
    }
    result.push({ x, y });
  }
  console.log(result);
  return result;
}

export default bresenham;
