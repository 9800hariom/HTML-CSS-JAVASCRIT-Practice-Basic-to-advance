const segments = [];
const total = 30;

let mouseX = innerWidth / 2;
let mouseY = innerHeight / 2;

// Create snake
for (let i = 0; i < total; i++) {
    const s = document.createElement("div");
    s.className = "segment";
    document.body.appendChild(s);

    segments.push({
        el: s,
        x: mouseX,
        y: mouseY,
        size: 18 - i * 0.4
    });
}

// Mouse move
document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // Head follows mouse
    segments[0].x += (mouseX - segments[0].x) * 0.25;
    segments[0].y += (mouseY - segments[0].y) * 0.25;

    // Body follow
    for (let i = 1; i < segments.length; i++) {
        segments[i].x += (segments[i - 1].x - segments[i].x) * 0.25;
        segments[i].y += (segments[i - 1].y - segments[i].y) * 0.25;
    }

    // Render
    segments.forEach((seg, i) => {
        seg.el.style.width = seg.size + "px";
        seg.el.style.height = seg.size + "px";
        seg.el.style.left = seg.x + "px";
        seg.el.style.top = seg.y + "px";
        seg.el.style.zIndex = total - i;
    });

    requestAnimationFrame(animate);
}

animate();
