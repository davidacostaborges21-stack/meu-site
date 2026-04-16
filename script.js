const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(link => {
  if (link.getAttribute('href') === current) link.classList.add('active');
});
