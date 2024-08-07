document.addEventListener('DOMContentLoaded', function() {
    const styleTag = document.createElement('style');
    const linkTag = document.createElement('link');
    const divTag = document.createElement('div');
    const aTag = document.createElement('a');
    const imgTag = document.createElement('img');

    linkTag.rel = "stylesheet";
    linkTag.href = "https://use.fontawesome.com/releases/v5.6.4/css/all.css";

    styleTag.textContent = `
    html{
      scroll-behavior: smooth;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.6;
      }
    }

    #page_top {
        width: 50px;
        height: 50px;
        position: fixed;
        right: 0;
        bottom: 0;
        opacity: 0;
        padding: 3px 7px 2px 4px;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        border: var(--charaColor) 2px solid;
    }

    #page_top img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: right; /* 中心を基準に拡大 */
    }

    #page_top.show {
      opacity: 1; 
    }
    
    #page_top a{
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
    `;

    divTag.id = 'page_top';

    aTag.href = '#';

    imgTag.src = '../img/favicon.png';

    document.head.appendChild(styleTag);
    console.log("styleTag 追加", styleTag);
    document.head.appendChild(linkTag);
    console.log("linkTag 追加", linkTag);
    aTag.appendChild(imgTag);
    console.log("imgTag 追加", imgTag);
    divTag.appendChild(aTag);
    console.log("aTag 追加", aTag);
    document.body.appendChild(divTag);
    console.log("divTag 追加", divTag);

    imgTag.onload = function() {
        console.log("画像の幅: " + imgTag.width + "px");
        console.log("画像の高さ: " + imgTag.height + "px");
    };

    window.addEventListener('scroll', function() {
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
