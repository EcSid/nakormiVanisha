const ball = document.querySelector(".pizza");
const vanyaShd = document.querySelector(".vanyaShd");
const vanyaEst = document.querySelector(".vanyaEst");
const il1 = document.querySelector(".il1");
const il2 = document.querySelector(".il2");
const il3 = document.querySelector(".il3");
const san13 = document.querySelector(".san13");
const san14 = document.querySelector(".san14");

let bool = false;
setTimeout(() => document.body.classList.remove("hidden"), 2000)

ball.onmousedown = function(e) { // (1) отследить нажатие

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
  
    document.body.append(ball);
 
  
    moveAt(e);
    
    function moveAt(e) {
      ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
      ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
      
    }
    function onMouseMove(e) {
      moveAt(e);
    }
  
    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) положить мяч, удалить более ненужные обработчики событий
    ball.onmouseup = function() {

      
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
      if (bool) addRemove();
    };
  
  };


function check () {
    let rectIvan = vanyaShd.getBoundingClientRect();
    let rect = ball.getBoundingClientRect();
    if ((rect.top > rectIvan.top && rect.bottom < rectIvan.bottom) && (rect.left > rectIvan.left && rect.right < rectIvan.right)) {
        vanyaShd.classList.add("hidden");
        vanyaEst.classList.remove("hidden");
        bool = true;
    } else if (detectTouching(ball, il1)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, il2)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, il3)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, san13)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, san14)) {
        window.location.href = "GameOver.html";
    }
    /*
    if ((rect.top > rectIl3.top && rect.bottom < rectIl3.bottom) && (rect.left > rectIl3.left && rect.right < rectIl3.right)) {
      window.location.href = "GameOver.html";
    };
    */
};

setInterval(() => check(), 20)

ball.ondragstart = function() {
  return false;
};

function addRemove() {
    ball.classList.add("ballRem");
    setTimeout(() => {
      window.location.href = "level02.html";
    }, 3000);
}

function detectTouching(i, j) {

    i = i.getBoundingClientRect();
    j = j.getBoundingClientRect();
   
   return i.top + i.height > j.top && 
          i.left + i.width > j.left && 
          i.bottom - i.height < j.bottom && 
          i.right - i.width < j.right
};