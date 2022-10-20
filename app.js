const canvas = document.getElementById('solar-canvas');
const ctx = canvas.getContext('2d', { alpha: false });

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 900, 900);



const sunPosition = { x: 400, y: 335 };

const sunData = {
    radius: 9,
    color: 'yellow',
    name: "Sun",
    x: sunPosition.x,
    y: sunPosition.y,
    scaleFactor: .32
};

function clear(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clear(ctx);