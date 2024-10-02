// モーダル要素を取得
const modal = document.getElementById('myModal');
// モーダルを開くボタンを取得
const btn = document.getElementById('btn');
// モーダルを閉じるアイコン（×）を取得
const span = document.getElementById('closeModal');

// ボタンがクリックされた時にモーダルを表示
btn.onclick = function () {
  modal.style.display = 'block'; // モーダルのdisplayスタイルを"block"にして表示
};

// ×（クローズアイコン）がクリックされた時にモーダルを非表示
span.onclick = function () {
  modal.style.display = 'none'; // モーダルのdisplayスタイルを"none"にして非表示
};

// モーダルの外側がクリックされた時にモーダルを非表示
document.onclick = function (event) {
  // クリックされた箇所がモーダル自体（外側）であれば
  if (event.target == modal) {
    modal.style.display = 'none'; // モーダルのdisplayスタイルを"none"にして非表示
  }
};
