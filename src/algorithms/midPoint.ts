import { Point } from "types";

function midPoint(p1: Point, p2: Point) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  let r = Math.max(dx, dy);
  let pk = 1 - r;
  let x = p2.x;
  let y = p2.y;

  let result: Point[] = [{ x, y }];
  while (y > 0) {
    if (pk < 0) {
      pk = pk + 2 * dy;
      x++;
    } else {
      pk = pk + 2 * dy + 2 * dx;
      x++;
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

export default midPoint;
