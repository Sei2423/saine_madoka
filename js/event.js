// birthday 
document.addEventListener('DOMContentLoaded', () => {
    now = ("" + new Date(Date.now())).split(" ")
    if (now[1] == "Apr" && now[2] == '21') {
        const height = window.innerHeight;
        a = 35
        confetti({
            angle: 90 + a, // ← 左上に向かって
            origin: { x: 1, y: 1 }, // ← 右下の外側
            particleCount: 50,
            spread: 60,
            startVelocity: 45,
            gravity: 0.8
        });

        confetti({
            angle: 90 - a, // ← 右上に向かって
            origin: { x: 0, y: 1 }, // ← 左下の外側
            particleCount: 50,
            spread: 60,
            startVelocity: 45,
            gravity: 0.8
        });
    }
})
