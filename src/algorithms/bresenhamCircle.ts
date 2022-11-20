import { Point } from "types";

function bresenhamCircle(p1: Point, p2: Point) {
  let r = p2.y;
  let d = 3 - 2 * r;
  let x = 0;
  let y = p2.y;

  let result: Point[] = [{ x, y }];
  while (y > 0) {
    x++;
    if (d < 0) {
      d = d + 4 * x + 6;
    } else {
      d = d + 4 * (x - y) + 10;
      y--;
    }
    result.push({ x, y });
  }

  const c2 = result.map(c => ({ x: c.x, y: c.y * -1 - 1 }));
  const c3 = c2.map(c => ({ x: c.x * -1 - 1, y: c.y }));
  const c4 = c3.map(c => ({ x: c.x, y: c.y * -1 - 1 }));
  const circle = [...result, ...c2, ...c3, ...c4];

  return circle;
}

export default bresenhamCircle;
