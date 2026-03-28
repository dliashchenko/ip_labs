
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 980, hash: 'dffeffe655cb2a0fa4596a1ef2b02de39833c6f436edb3ceb531854f7d454bd9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 940, hash: '56ce01e59604d35ec1d9aa13c05217002451e0a83ee7c0866ab4d84d1068b0ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14726, hash: 'e1001dc3789a907f964d5b29c6ca8d658b533920fe9bc26312ce3e455813561d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-B74PQFHQ.css': {size: 3062, hash: 'J38yxh5K7bQ', text: () => import('./assets-chunks/styles-B74PQFHQ_css.mjs').then(m => m.default)}
  },
};
