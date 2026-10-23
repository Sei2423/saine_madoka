/**
 * footer.js
 * フッターHTMLを動的に挿入するスクリプト
 * 各HTMLページの <body> 末尾に <footer> を自動生成します
 */
(function () {
    const footerHTML = `
<footer>
    <div class="container footer-container">
        <div class="footer-section">
            <h4>配布物</h4>
            <ul class="footer-links">
                <li><a href="utau.html">UTAU音源</a></li>
                <li><a href="materials.html">公式素材</a></li>
                <li><a href="fa.html">ファンアート</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>殺音マドカについて</h4>
            <ul class="footer-links">
                <li><a href="madoka.html">殺音マドカとは</a></li>
                <li><a href="charactor_terms_of_service.html">キャラクターの利用規約</a></li>
                <li><a href="utau_terms_of_service.html">UTAU音源の利用規約</a></li>
                <li><a href="credit.html">制作者一覧</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>SNS</h4>
            <ul class="footer-links">
                <li><a href="https://www.nicovideo.jp/user/134000361">ニコニコ動画</a></li>
                <li><a href="https://www.youtube.com/@saimadoproject">Youtube</a></li>
                <li><a href="https://x.com/Sainemadoka0421">Twitter</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 殺音マドカproject All rights reserved.</p>
    </div>
</footer>`;

    // DOMContentLoaded後に body の末尾へフッターを挿入
    document.addEventListener('DOMContentLoaded', function () {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    });
})();
