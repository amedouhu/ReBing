// ヘッダーを固定する
const b_header = document.getElementById('b_header');
if (b_header) {
    b_header.style.position = 'fixed';
    b_header.style.zIndex = '100';
    b_header.style.width = '100%';
  }

const b_content = document.getElementById('b_content');
if (b_content) {
    b_content.style.position = 'relative';
    var heidge = b_header.clientHeight;
    b_content.style.top = `${heidge}px`;
}

const b_context = document.getElementById('b_context');
if (b_context) {
    b_context.style.top = '200px'
    b_context.style.width = '300px'
}

const wikiWidgetContainer = document.getElementById('wikiWidgetContainer');
if (wikiWidgetContainer) {
    wikiWidgetContainer.parentNode.removeChild(wikiWidgetContainer)
}

const b_footer = document.getElementById('b_footer');
if (b_footer) {
    b_footer.parentNode.removeChild(b_footer)
}

const mfa_root = document.getElementById('mfa_root');
if (mfa_root) {
    mfa_root.parentNode.removeChild(mfa_root)
}