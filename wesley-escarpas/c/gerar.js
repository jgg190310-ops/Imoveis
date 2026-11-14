// Gera as páginas de compartilhamento de cada casa (c/WE001/ ... c/WE101/)
// com prévia própria no WhatsApp (foto + nome da casa), e a imagem og-capa.jpg do site.
// Uso: na pasta wesley-escarpas, rodar  node c/gerar.js
// Precisa do Playwright (Chromium). Rodar de novo sempre que mudar data.js.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chromium } = require('playwright');

const SITE = path.resolve(__dirname, '..');
const URL = 'https://jgg190310-ops.github.io/Imoveis/wesley-escarpas/';
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(SITE, 'data.js'), 'utf8') + ';this.D=DATA', ctx);
const D = ctx.D;
const TAGS = { vista: 'vista pro lago', marina: 'marina / píer', infinita: 'piscina de borda infinita', aquecida: 'piscina aquecida', hidro: 'hidro / spa', sauna: 'sauna', jogos: 'sinuca / jogos', acessivel: 'acessibilidade' };
const ORDER = Object.keys(TAGS);
const pad = n => String(n).padStart(3, '0');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const html = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8');
const logo = html.slice(html.indexOf('<symbol id="logo"'), html.indexOf('</symbol>', html.indexOf('<symbol id="logo"')) + 9);
const img64 = f => 'data:image/webp;base64,' + fs.readFileSync(path.join(SITE, f)).toString('base64');
const FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gloock&family=Jost:wght@400..700&display=block">';

function desc(d) {
  const p = [];
  if (d.su) p.push(d.su + (d.su === 1 ? ' suíte' : ' suítes'));
  if (d.h) p.push('até ' + d.h + ' pessoas');
  const tags = (d.tags || []).filter(t => TAGS[t]).sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b)).slice(0, 3).map(t => TAGS[t]);
  let s = p.join(' · ') + (tags.length ? (p.length ? ' · ' : '') + tags.join(', ') : '') + '.';
  if (d.rev) s += ' Réveillon: pacote de R$ ' + d.rev.toLocaleString('pt-BR') + '.';
  return s.charAt(0).toUpperCase() + s.slice(1) + ' Consulte datas e valores com o Wesley pelo WhatsApp.';
}

function page(d) {
  const norm = x => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const ref = d.ref, title = norm(d.nome).includes(norm(d.reg)) ? d.nome : d.nome + ' · ' + d.reg, u = URL + 'c/' + ref + '/';
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(d.nome)} (${ref}) · Wesley Escarpas</title>
<meta name="description" content="${esc(desc(d))}">
<link rel="canonical" href="${u}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Wesley Escarpas · Casas em Escarpas do Lago">
<meta property="og:url" content="${u}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc(d))}">
<meta property="og:image" content="${u}og.jpg">
<meta property="og:image:width" content="800"><meta property="og:image:height" content="420">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0B2522">
<meta http-equiv="refresh" content="0; url=../../#casa/${ref}">
<script>location.replace('../../#casa/${ref}')</script>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F6F2EA;color:#12221F;font:16px/1.5 system-ui,sans-serif}a{color:#0E3430}</style>
</head>
<body><p>Abrindo <a href="../../#casa/${ref}">${esc(d.nome)}</a>…</p></body>
</html>
`;
}

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 800, height: 420 }, deviceScaleFactor: 1 });
  await p.setContent(`<html><head>${FONT}<style>
    body{margin:0}#c{position:relative;width:800px;height:420px;overflow:hidden;background:#0A201D;font-family:Jost,sans-serif}
    #im{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
    #g{position:absolute;inset:0;background:linear-gradient(180deg,rgba(6,18,16,0) 50%,rgba(6,18,16,.78))}
    #b{position:absolute;left:26px;bottom:20px;display:flex;align-items:center;gap:12px;color:#fff}
    #b svg{width:57px;height:38px}
    #t{font-size:13px;letter-spacing:.24em;text-transform:uppercase;line-height:1.35}
    #r{display:block;letter-spacing:.14em;color:#E7CC9C;font-size:11.5px;font-weight:600}
  </style></head><body><svg width="0" height="0" style="position:absolute"><defs>${logo.replace('#B8925A', '#D6B57E').replace('#B8925A', '#D6B57E')}</defs></svg>
  <div id="c"><img id="im"><div id="g"></div><div id="b"><svg viewBox="0 0 150 100"><use href="#logo" style="color:#fff"/></svg><div id="t">Wesley <b>Escarpas</b><span id="r"></span></div></div></div></body></html>`);
  await p.evaluate(() => document.fonts.ready);
  let n = 0;
  for (const d of D) {
    const cv = d.cv || 0;
    const dir = path.join(SITE, 'c', d.ref);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), page(d));
    await p.evaluate(([src, ref]) => new Promise(res => { const im = document.getElementById('im'); im.onload = res; im.src = src; document.getElementById('r').textContent = ref; }), [img64(`img/p${pad(d.k)}-${cv}.webp`), d.ref + ' · ' + d.reg]);
    await p.screenshot({ path: path.join(dir, 'og.jpg'), type: 'jpeg', quality: 80, clip: { x: 0, y: 0, width: 800, height: 420 } });
    n++;
  }
  // imagem de capa do site (1200x630)
  await p.setViewportSize({ width: 1200, height: 630 });
  await p.setContent(`<html><head>${FONT}<style>
    body{margin:0}#c{position:relative;width:1200px;height:630px;overflow:hidden;background:#0A201D;font-family:Jost,sans-serif;color:#fff}
    #im{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 60%}
    #g{position:absolute;inset:0;background:linear-gradient(90deg,rgba(6,18,16,.86) 0%,rgba(6,18,16,.55) 48%,rgba(6,18,16,.05) 80%),linear-gradient(180deg,rgba(6,18,16,0) 60%,rgba(6,18,16,.5))}
    #in{position:absolute;left:64px;top:58px;bottom:56px;display:flex;flex-direction:column;justify-content:space-between;width:640px}
    .br{display:flex;align-items:center;gap:14px}.br svg{width:78px;height:52px}
    .wm{font-size:15px;letter-spacing:.26em;text-transform:uppercase}
    h1{margin:0;font-size:68px;line-height:1;font-weight:400;font-family:Gloock,serif;letter-spacing:-.015em}
    p{margin:18px 0 0;font-size:21px;color:rgba(255,255,255,.86)}
    .k{font-size:13px;font-weight:600;font-stretch:120%;letter-spacing:.17em;text-transform:uppercase;color:#E7CC9C;margin-bottom:18px}
  </style></head><body><svg width="0" height="0" style="position:absolute"><defs>${logo.replace('#B8925A', '#D6B57E').replace('#B8925A', '#D6B57E')}</defs></svg>
  <div id="c"><img id="im" src="${img64('img/p049-2.webp')}"><div id="g"></div><div id="in">
  <div class="br"><svg viewBox="0 0 150 100"><use href="#logo" style="color:#fff"/></svg><span class="wm">Wesley <b>Escarpas</b></span></div>
  <div><div class="k">Aluguel de temporada · Capitólio, MG</div><h1>A casa do seu grupo em Escarpas do Lago.</h1><p>${D.length} casas e ranchos à beira do Lago de Furnas · CRECI-MG 61.552</p></div>
  </div></div></body></html>`);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.screenshot({ path: path.join(SITE, 'og-capa.jpg'), type: 'jpeg', quality: 84 });
  await b.close();
  console.log('ok:', n, 'páginas de casas + og-capa.jpg');
})();
