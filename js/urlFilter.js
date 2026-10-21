document.addEventListener('DOMContentLoaded', () => {
    // 許可する外部ドメインのホワイトリスト
    const ALLOWED_DOMAINS = [
        'x.com',
        'twitter.com',
        'youtube.com',
        'www.youtube.com',
        'nicovideo.jp',
        'www.nicovideo.jp',
        'commons.nicovideo.jp',
        'sainemadoka.booth.pm',
        'docs.google.com'
    ];

    // 全てのリンククリックを一元監視（イベント委譲）
    document.body.addEventListener('click', (event) => {
        const anchor = event.target.closest('a');
        if (!anchor || !anchor.href) return;

        try {
            const targetUrl = new URL(anchor.href, window.location.href);

            // ページ内リンク（#）や特殊スキームはスキップ
            if (targetUrl.protocol !== 'http:' && targetUrl.protocol !== 'https:') {
                return;
            }

            // 同一オリジン（自サイト内）への遷移は無条件で許可
            if (targetUrl.origin === window.location.origin) {
                return;
            }

            // ホスト名がホワイトリストに含まれているかチェック
            const isAllowed = ALLOWED_DOMAINS.includes(targetUrl.hostname);

            if (!isAllowed) {
                event.preventDefault();
                alert(`【安全のための警告】\n許可されていない外部URLへの遷移はブロックされました:\n${targetUrl.href}`);
                console.warn(`[URL Filter] Blocked navigation to: ${targetUrl.href}`);
            } else {
                // 安全な外部リンクの場合は rel 属性を付与
                anchor.rel = 'noopener noreferrer';
                anchor.target = '_blank';
            }
        } catch (e) {
            // URLパースに失敗した不正なリンクはブロック
            event.preventDefault();
            console.error('[URL Filter] Invalid URL encountered:', e);
        }
    });
});
