function drawOrbit(ctx, { x, y, radius }) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.closePath();
}