import { Point } from "types";

function dda(p1: Point, p2: Point) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  let pk = 2 * dy - dx;
  let x = p1.x;
  let y = p1.y;
  const steps = Math.max(dx, dy);
  let xinc = dx / steps;
  let yinc = dy / steps;

  let result: Point[] = [{ x, y }];
  let i = 0;
  while (i < steps) {
    x += xinc;
    y += yinc;
    result.push({ x: Math.round(x), y: Math.round(y) });
    i++;
  }
  console.log(result);
  return result;
}

export default dda;
