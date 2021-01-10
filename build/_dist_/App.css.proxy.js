// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App-logo.svelte-6pbrz2{-webkit-animation:svelte-6pbrz2-App-logo-scale infinite 1.6s ease-in-out alternate;animation:svelte-6pbrz2-App-logo-scale infinite 1.6s ease-in-out alternate}@-webkit-keyframes svelte-6pbrz2-App-logo-scale{from{transform:scale(1)}to{transform:scale(1.06)}}@keyframes svelte-6pbrz2-App-logo-scale{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}