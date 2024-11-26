// register.js

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // 비밀번호 확인
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    // 사용자 정보 저장 (localStorage)
    localStorage.setItem(username, password);
    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
  
    // 로그인 페이지로 이동
    window.location.href = '../Login_Page/login.html';
  });
  