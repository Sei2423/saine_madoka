document.addEventListener('DOMContentLoaded', function() {
    const styleTag = document.createElement('style');
    const linkTag = document.createElement('link');
    const divTag = document.createElement('div');
    const spanTag = document.createElement('span');
    const aTag = document.createElement('a');
    const imgTag = document.createElement('img');

    //linkTag.rel = "stylesheet";
    //linkTag.href = "https://use.fontawesome.com/releases/v5.6.4/css/all.css";

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
        width: 60px;
        height: 60px;
        right: 0;
        bottom: 0;
        opacity: 0;
        padding: 3px 7px 2px 4px;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        border: var(--charaColor) 2px solid;
        animation: 10s linear 0s infinite running updown, 13s linear 0s infinite running leftright;
        position: fixed;
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

    #page_top span{
      position: absolute;
      color: var(--charaColor);
      z-index: 1;
      font-size: 12px;
      left: 2.5px;
      top: 1px;
    }
    
    #page_top a{
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    @keyframes updown {
        75% {
            bottom: 0px;
        }
        0%, 50%, 100% {
            bottom: 16px;
        }
        25% {
            bottom: 32px;
        }
        5%, 45% {
            bottom: 20.96px;
        }
        10%, 40% {
            bottom: 25.439999999999998px;
        }
        15%, 35% {
            bottom: 28.96px;
        }
        20%, 30% {
            bottom: 31.2px;
        }
        55%, 95% {
            bottom: 11.04px;
        }
        60%, 90% {
            bottom: 6.5600000000000005px;
        }
        65%, 85% {
            bottom: 3.039999999999999px;
        }
        70%, 80% {
            bottom: 0.8000000000000007px;
        }
    }

    
    @keyframes leftright {
        75% {
            right: 6px;
        }
        0%, 50%, 100% {
            right: 8px;
        }
        25% {
            right: 10px;
        }
        5%, 45% {
            right: 8.62px;
        }
        10%, 40% {
            right: 9.18px;
        }
        15%, 35% {
            right: 9.620000000000001px;
        }
        20%, 30% {
            right: 9.9px;
        }
        55%, 95% {
            right: 7.38px;
        }
        60%, 90% {
            right: 6.82px;
        }
        65%, 85% {
            right: 6.38px;
        }
        70%, 80% {
            right: 6.1px;
        }
    }
    `;

    divTag.id = 'page_top';

    spanTag.innerHTML = 'TOP';
    
    aTag.href = '#';

    imgTag.src = 'img/favicon.png';

    document.head.appendChild(styleTag);
    console.log("styleTag 追加", styleTag);
    //document.head.appendChild(linkTag);
    //console.log("linkTag 追加", linkTag);
    aTag.appendChild(imgTag);
    console.log("imgTag 追加", imgTag);
    divTag.appendChild(aTag);
    console.log("aTag 追加", aTag);
    divTag.appendChild(spanTag);
    console.log("spanTag 追加", spanTag);
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
