const ball = document.querySelector(".pizza");
const vanyaShd = document.querySelector(".vanyaShd");
const vanyaEst = document.querySelector(".vanyaEst");
const san10 = document.querySelector(".san10");
const san11 = document.querySelector(".san11");
const san12 = document.querySelector(".san12");
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

  setTimeout(() => document.body.classList.remove("hidden"), 2000)



  
setInterval( () => {
  let rect = ball.getBoundingClientRect();
  let rectIvan = vanyaShd.getBoundingClientRect();
    if ((rect.top > rectIvan.top && rect.bottom < rectIvan.bottom) && (rect.left > rectIvan.left && rect.right < rectIvan.right)) {
        vanyaShd.classList.add("hidden");
        vanyaEst.classList.remove("hidden");
        bool = true;
    } else if (detectTouching(ball, san11)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, san12)) {
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
}, 20);

ball.ondragstart = function() {
  return false;
};

function addRemove() {
    ball.classList.add("ballRem");
    setTimeout(() => {
      window.location.href = "level04.html";
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