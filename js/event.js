/**
 * event.js
 * 記念日（4月21日 誕生日）イベント演出スクリプト
 */
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    // getMonth() は 0-indexed (4月は 3)
    const isBirthday = (today.getMonth() === 3 && today.getDate() === 21);

    if (isBirthday) {
        // confetti 関数が読み込まれている場合のみ安全に実行（未定義エラーを防止）
        if (typeof confetti === 'function') {
            const angleOffset = 35;

            confetti({
                angle: 90 + angleOffset, // ← 左上に向かって
                origin: { x: 1, y: 1 },    // ← 右下の外側
                particleCount: 50,
                spread: 60,
                startVelocity: 45,
                gravity: 0.8
            });

            confetti({
                angle: 90 - angleOffset, // ← 右上に向かって
                origin: { x: 0, y: 1 },    // ← 左下の外側
                particleCount: 50,
                spread: 60,
                startVelocity: 45,
                gravity: 0.8
            });
        } else {
            console.info('[event.js] Today is Madoka\'s birthday! (confetti library is not loaded)');
        }
    }
});
