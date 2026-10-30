import { replaceContent } from '../assets/motion.js';

const $ = selector => document.querySelector(selector);
const collections = [
  { title: 'Field notes', description: 'Ideas and observations worth keeping.', count: 24 },
  { title: 'Saved links', description: 'Useful places to come back to.', count: 18 },
  { title: 'Unfinished drafts', description: 'A little space for work in progress.', count: 7 },
];
let selected = 0;
function select(index, focus = false) {
  selected = index;
  document.querySelectorAll('[role=tab]').forEach((tab,i) => {
    tab.setAttribute('aria-selected', i === selected);
    tab.tabIndex = i === selected ? 0 : -1;
  });
  $('#panel').setAttribute('aria-labelledby', `tab-${index}`);
  const item = collections[index];
  replaceContent($('#title'), item.title);
  replaceContent($('#description'), item.description);
  replaceContent($('#count'), String(item.count));
  if (focus) $(`#tab-${index}`).focus();
}
document.querySelectorAll('[role=tab]').forEach((tab,index) => {
  tab.addEventListener('click', () => select(index));
  tab.addEventListener('keydown', event => {
    const next = {ArrowLeft:(index+2)%3,ArrowRight:(index+1)%3,Home:0,End:2}[event.key];
    if (next !== undefined) { event.preventDefault(); select(next,true); }
  });
});
$('#add').addEventListener('click', () => {
  collections[selected].count++;
  replaceContent($('#count'), String(collections[selected].count));
});
$('#focus').addEventListener('click', event => {
  const button = event.currentTarget;
  button.setAttribute('aria-checked', button.getAttribute('aria-checked') !== 'true');
});
$('#intensity').addEventListener('input', event => { $('#intensity-value').textContent = `${event.target.value}%`; });
$('#theme').addEventListener('click', event => {
  const light = document.documentElement.dataset.theme !== 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  event.currentTarget.textContent = light ? 'Dark theme' : 'Light theme';
});
$('#name-form').addEventListener('submit', event => {
  event.preventDefault();
  const value = $('#name').value.trim();
  $('#name').setAttribute('aria-invalid', !value);
  $('#name-help').classList.toggle('error', !value);
  $('#name-help').textContent = value ? `“${value}” saved for this demo session.` : 'Enter a workspace name before saving.';
  if (!value) $('#name').focus();
});
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const motionLabel = () => { $('#motion-label').textContent = reduced.matches ? 'Reduced motion · immediate changes' : '300ms · 3px blur · no displacement'; };
reduced.addEventListener('change', motionLabel);
motionLabel();
