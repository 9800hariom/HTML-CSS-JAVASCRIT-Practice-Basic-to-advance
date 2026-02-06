const segments = [];
const totalSegments = 25;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Create snake body
for (let i = 0; i < totalSegments; i++) {
    const div = document.createElement("div");
    div.className = "segment";
    document.body.appendChild(div);
    segments.push({ el: div, x: mouseX, y: mouseY });
}

// Track mouse
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop
function animate() {
    // Head follows mouse
    segments[0].x += (mouseX - segments[0].x) * 0.2;
    segments[0].y += (mouseY - segments[0].y) * 0.2;

    // Body follows previous segment
    for (let i = 1; i < segments.length; i++) {
        segments[i].x += (segments[i - 1].x - segments[i].x) * 0.2;
        segments[i].y += (segments[i - 1].y - segments[i].y) * 0.2;
    }

    // Update position
    segments.forEach(seg => {
        seg.el.style.left = seg.x + "px";
        seg.el.style.top = seg.y + "px";
    });

    requestAnimationFrame(animate);
}

animate();
