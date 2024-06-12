document.querySelectorAll('.content-button').forEach(function(button) {
    button.addEventListener('click', function() {
      document.getElementById('content-frame').src = button.getAttribute('data-src');
      document.querySelectorAll('.content-button').forEach(function(btn) {
        btn.classList.remove('button-clicked');
      });
      // 给被点击的按钮添加 'button-clicked' 类
      this.classList.add('button-clicked');
      document.getElementById('content-frame').src = button.getAttribute('data-src');
    });
  });

  function iframeLoad(frame){
    frame.height = (frame.contentWindow.document.documentElement.scrollHeight)*1.05 + 'px';
  }