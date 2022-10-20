function drawPlanet(ctx, { radius, color, name, x, y}) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = '8px monospace';
    ctx.textAlign = 'center';
    for (let i = 0; i <  planets.length; i++) {

        if (name === 'Earth') {
            ctx.fillText(name, x - radius + 6, y - radius);
        } else if (name === 'Sun') {
            ctx.fillText(name, x - radius + 2, y - radius - 2);
        } else if (name === 'Murcury') {
            ctx.fillText(name, x - radius, y - radius);
        } else if (name === 'Venus') {
            ctx.fillText(name, x - radius, y - radius * 2);
        } else if (name === 'Mars') {
            ctx.fillText(name, x - radius + 10, y - radius);
        } else {
            ctx.fillText(name, x - radius, y - radius - 2);
        }

    }
    ctx.closePath();
} 