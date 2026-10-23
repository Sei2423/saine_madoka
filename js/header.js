/**
 * header.js
 * ヘッダーHTMLを動的に挿入するスクリプト
 * 各HTMLページの <body> 先頭に <header> を自動生成します
 */
(function () {
    const headerHTML = `
<header>
    <div class="fadein container header-container">
        <h1>
            <a href="index.html">
                <img class="logo" src="img/logo.png">
            </a>
        </h1>
        <nav class="pc">
            <ul>
                <li><a href="utau.html">UTAU音源</a></li>
                <li><a href="materials.html">素材配布</a></li>
                <li><a href="madoka.html">殺音マドカとは</a></li>
                <li><a href="utau_terms_of_service.html">音声規約</a></li>
                <li><a href="charactor_terms_of_service.html">キャラ規約</a></li>
            </ul>
        </nav>
        <nav class="sp">
            <label for="isHiddenInfo">
                <span>Info</span>
                <svg>
                    <g fill="white" stroke="black" stroke-width="1px">
                        <path d="M 17 1 L 1 17 H 33 Z"></path>
                        <path d="M 17 3 Q 5 15 5 41 H 29 Q 29 15 17 3"></path>
                        <path d="M 11 21 A 8 2 0 0 0 23 21 A 8 2 0 0 0 11 21 Z M 11 27 A 8 2 0 0 0 23 27 A 8 2 0 0 0 11 27 Z M 11 33 A 8 2 0 0 0 23 33 A 8 2 0 0 0 11 33 Z" stroke-width="0.7px"></path>
                    </g>
                </svg>
            </label>
            <input type="checkbox" id="isHiddenInfo">
            <div class="infoContent">
                <ul>
                    <li><a href="utau.html">UTAU音源</a></li>
                    <li><a href="materials.html">素材配布</a></li>
                    <li><a href="madoka.html">殺音マドカとは</a></li>
                    <li><a href="utau_terms_of_service.html">音声規約</a></li>
                    <li><a href="charactor_terms_of_service.html">キャラ規約</a></li>
                </ul>
            </div>
        </nav>
    </div>
</header>`;

    // DOMContentLoaded後に body の先頭へヘッダーを挿入
    // （<head>内で defer なしに読み込まれた場合、実行時点では
    //   document.body がまだ存在しないためイベントを使って待機する）
    document.addEventListener('DOMContentLoaded', function () {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    });
})();
