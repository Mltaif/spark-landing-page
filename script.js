const tryBtn = document.getElementById('tryBtn');

tryBtn?.addEventListener('click', () => {
  const target = document.getElementById('examples');
  target?.scrollIntoView({ behavior: 'smooth' });
});
