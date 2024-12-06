const topButton = document.querySelector('.js-backToTop');

//クリックイベント
topButton.addEventListener('click', () => {
  //ページ上部へスムーススクロール
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

//スクロールまでの量
window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    topButton.classList.add('is-active');
  } else {
    topButton.classList.remove('is-active');
  }
});
