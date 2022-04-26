const star = document.getElementById('star');
const R = 30;
const r = 17;

function X(radius, coordAngle) {
  if (radius > 50) return;
  return (0 <= coordAngle <= 90 || 270 <= coordAngle <= 360) ?
    (radius * Math.cos(coordAngle * (Math.PI / 180)) + 50).toFixed(3) :
    (50 - radius * Math.cos(coordAngle * (Math.PI / 180))).toFixed(3);
}

function Y(radius, coordAngle) {
  if (radius > 50) return;
  return (50 - radius * Math.sin(coordAngle * (Math.PI / 180))).toFixed(3);
}

star.setAttribute('points',
  `${X(R, 90)},${Y(R, 90)}
  ${X(r, 54)},${Y(r, 54)}
  ${X(R, 18)},${Y(R, 18)}
  ${X(r, 342)},${Y(r, 342)}
  ${X(R, 306)},${Y(R, 306)}
  ${X(r, 270)},${Y(r, 270)}
  ${X(R, 234)},${Y(R, 234)}
  ${X(r, 198)},${Y(r, 198)}
  ${X(R, 162)},${Y(R, 162)}
  ${X(r, 126)},${Y(r, 126)}`);