// login.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 저장된 사용자 정보 확인 (localStorage)
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    alert('로그인 성공!');
    window.location.href = 'real_index.html';
  } else {
    alert('아이디 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.');
  }
});
