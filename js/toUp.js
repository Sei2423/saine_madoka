document.addEventListener('DOMContentLoaded', function () {
    const divTag = document.createElement('div');
    const spanTag = document.createElement('span');
    const aTag = document.createElement('a');
    const imgTag = document.createElement('img');

    divTag.id = 'page_top';
    spanTag.textContent = 'TOP';
    aTag.href = '#';
    imgTag.src = 'img/favicon.png';

    aTag.appendChild(imgTag);
    divTag.appendChild(aTag);
    divTag.appendChild(spanTag);
    document.body.appendChild(divTag);

    imgTag.onload = function () {
        console.log("画像の幅: " + imgTag.width + "px");
        console.log("画像の高さ: " + imgTag.height + "px");
    };

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollPosition / windowHeight) * 100;

        if (scrollPercentage > 10) {
            divTag.classList.add('show');
        } else {
            divTag.classList.remove('show');
        }
    });
});
