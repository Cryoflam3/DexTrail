(() => {
  let theme = 'dark';
  try { const saved = localStorage.getItem('dextrail-theme'); if (saved === 'light' || saved === 'dark') theme = saved; } catch {}
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0d1915' : '#f6f4eb');
    document.querySelectorAll('.theme-toggle').forEach(button => {
      const next = theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${next} mode`);
      button.textContent = `${next === 'light' ? '☀' : '☾'} ${next === 'light' ? 'Light' : 'Dark'} mode`;
    });
  };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelectorAll('.theme-toggle').forEach(button => button.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('dextrail-theme', theme); } catch {}
      apply();
    }));
  });
})();
