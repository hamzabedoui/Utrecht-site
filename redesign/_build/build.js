// Builds /redesign/<page>.html from _build/pages/<page>.html.
// - Head: the original page's SEO block (title, meta, canonical, OG) is copied from the project root file,
//   with its sitewide JSON-LD replaced by page-specific JSON-LD from the page source.
// - Header, footer and mobile action bar are shared partials, so every page is identical there.
// Usage: node redesign/_build/build.js [page ...]   (no args = all pages in _build/pages)
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(__dirname, 'pages');
// Output goes to the project root (Hamza, 2026-10-12: redesigned pages replace the originals).
const OUT = ROOT;
const partial = (n) => fs.readFileSync(path.join(__dirname, 'partials', n), 'utf8');

const pages = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(SRC).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5));

for (const name of pages) {
  const src = fs.readFileSync(path.join(SRC, name + '.html'), 'utf8');
  const metaMatch = src.match(/^<!--meta\s*([\s\S]*?)-->/);
  if (!metaMatch) throw new Error(`${name}: missing <!--meta {...}--> block`);
  const meta = JSON.parse(metaMatch[1]);
  const main = src.slice(metaMatch[0].length).trim();

  // Original head (the SEO work that must be kept)
  // Always read the original from git HEAD: the root file is overwritten by this build.
  const orig = require('child_process').execFileSync('git', ['show', `HEAD:${meta.original || name}.html`], { cwd: ROOT, encoding: 'utf8' });
  const endTag = '<!-- BCZ SEO RELEASE HEAD END -->';
  let head = orig.slice(0, orig.indexOf(endTag) + endTag.length);
  head = head.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(meta.ld)}</script>`);
  head = head.replace(/href="assets\//g, 'href="../assets/img/').replace(/assets\/img\/img\//g, 'assets/img/');
  if (meta.title) head = head.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${meta.title}"`).replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${meta.title}"`);
  if (meta.description) head = head.replace(/(<meta name="description" content=")[^"]*"/, `$1${meta.description}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${meta.description}"`).replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${meta.description}"`);
  head += '\n' + partial('head-assets.html');

  let header = partial('header.html');
  if (meta.nav) header = header.replace(`data-nav="${meta.nav}"`, `data-nav="${meta.nav}" aria-current="page"`);
  const html = `${head}</head>\n<body>\n${header}\n${main}\n${partial('footer.html')}</body>\n</html>\n`;
  // Partials are written for /redesign; strip the ../ prefix for files in the root.
  const out = OUT === ROOT ? html.replace(/\.\.\/(assets\/|index\.html)/g, '$1') : html;
  fs.writeFileSync(path.join(OUT, name + '.html'), out);
  console.log('built', name + '.html', Math.round(out.length / 1024) + ' KB');
}
