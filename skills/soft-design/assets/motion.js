// Selective soft dissolve: call on the smallest region whose content changes.
const active = new Map();
const reduced = matchMedia('(prefers-reduced-motion: reduce)');

export function dissolveFrames(incoming, blur) {
  const clear = { opacity: 1, filter: 'blur(0px)' };
  const soft = { opacity: 0, filter: `blur(${blur})` };
  return incoming ? [soft, clear] : [clear, soft];
}

export function replaceContent(element, html, animate = true) {
  for (const [target, finish] of active) {
    if (target === element || element.contains(target)) finish();
  }
  if (element.innerHTML === html) return;
  const style = getComputedStyle(element);
  const duration = parseFloat(style.getPropertyValue('--content-duration'));
  if (!animate || reduced.matches || !duration || !element.childNodes.length) {
    element.innerHTML = html;
    return;
  }
  const snapshot = element.cloneNode(true);
  const sources = [element, ...element.querySelectorAll('*')];
  const copies = [snapshot, ...snapshot.querySelectorAll('*')];
  sources.forEach((source, index) => {
    const computed = getComputedStyle(source);
    for (const property of computed) copies[index].style.setProperty(property, computed.getPropertyValue(property));
    copies[index].style.transition = 'none';
    copies[index].style.animation = 'none';
  });
  const width = element.getBoundingClientRect().width;
  Object.assign(snapshot.style, { margin: '0', position: 'static', width: `${width}px`, maxWidth: 'none' });
  const overlay = document.createElement('span');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.inert = true;
  overlay.style.cssText = `position:absolute;top:0;left:0;width:${width}px;pointer-events:none;display:block;`;
  // Snapshot IDs and semantics stay outside the live document.
  const shadow = overlay.attachShadow({ mode: 'closed' });
  shadow.append(snapshot);

  element.innerHTML = html;
  const fresh = document.createElement(element.matches('h1,h2,h3,p,span') ? 'span' : 'div');
  fresh.style.display = 'block';
  fresh.append(...element.childNodes);
  const position = element.style.position;
  if (style.position === 'static') element.style.position = 'relative';
  element.append(fresh, overlay);
  const options = { duration, easing: style.getPropertyValue('--content-ease').trim(), fill: 'both' };
  const blur = style.getPropertyValue('--content-blur').trim();
  const animations = [overlay.animate(dissolveFrames(false, blur), options), fresh.animate(dissolveFrames(true, blur), options)];
  const finish = () => {
    if (active.get(element) !== finish) return;
    active.delete(element);
    animations.forEach(animation => animation.cancel());
    overlay.remove();
    fresh.replaceWith(...fresh.childNodes);
    element.style.position = position;
  };
  active.set(element, finish);
  Promise.all(animations.map(animation => animation.finished)).then(finish).catch(() => {});
}

function finishAll() { for (const finish of active.values()) finish(); }
reduced.addEventListener('change', finishAll);
window.addEventListener('resize', finishAll);
