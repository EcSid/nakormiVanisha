const ball = document.querySelector(".pizza");
const vanyaShd = document.querySelector(".vanyaShd");
const vanyaEst = document.querySelector(".vanyaEst");
const san13 = document.querySelector(".san13");
const san14 = document.querySelector(".san14");
const tim15 = document.querySelector(".tim15");
const tim16 = document.querySelector(".tim16");
const tim17 = document.querySelector(".tim17");
const tim18 = document.querySelector(".tim18");
const tim19 = document.querySelector(".tim19");
const tim20 = document.querySelector(".tim20");
const san21 = document.querySelector(".san21");
const san22 = document.querySelector(".san22");
const san23 = document.querySelector(".san23");
const san24 = document.querySelector(".san24");


let bool = false;

setTimeout(() => document.body.classList.remove("hidden"), 2000);
setTimeout(() => document.querySelector(".ad").classList.add("adMove"), 6000);

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
    } else if (detectTouching(ball, tim15)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, tim16)) {
        window.location.href = "GameOver.html";
    } else if (detectTouching(ball, tim17)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, tim18)) {
        window.location.href = "GameOver.html";
    } else if (detectTouching(ball, tim19)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, tim20)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, san21)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, san22)) {
      window.location.href = "GameOver.html";
    }  else if (detectTouching(ball, san23)) {
      window.location.href = "GameOver.html";
    } else if (detectTouching(ball, san24)) {
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
      window.location.href = "level05.html";
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