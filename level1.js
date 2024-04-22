const ball = document.querySelector(".pizza");
const vanyaShd = document.querySelector(".vanyaShd");
const vanyaEst = document.querySelector(".vanyaEst");
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


setInterval( () => {
    
  let rectIvan = vanyaShd.getBoundingClientRect();
  let rect = ball.getBoundingClientRect();
  if ((rect.top > rectIvan.top && rect.bottom < rectIvan.bottom) && (rect.left > rectIvan.left && rect.right < rectIvan.right)) {
      vanyaShd.classList.add("hidden");
      vanyaEst.classList.remove("hidden");
      bool = true;
  }
}, 100);

ball.ondragstart = function() {
  return false;
};

function addRemove() {
    ball.classList.add("ballRem");
    setTimeout(() => {
      window.location.href = "level01.html";
    }, 3000);
}

function detectTouching(divFir, divSec) {
  let verticalMatch;
  let horizontalMatch;

  let div1 = divFir.getBoundingClientRect();
  let div1Top = div1.top;
  let div1Left = div1.left;
  let div1Right = div1.right;
  let div1Bottom = div1.bottom;

  let div2 = divSec.getBoundingClientRect();
  let div2Top = div2.top;
  let div2Left = div2.left;
  let div2Right = div2.right;
  let div2Bottom = div2.bottom;

  if ((div2Top > div1Top && div2Top < div1Bottom)||(div2Bottom > div1Top && div2Bottom < div1Bottom)) {
    verticalMatch = true;
  } else{
    verticalMatch = false;
  }

  if ((div2Right > div1Left && div2Right < div1Right)||(div2Left < div1Right && div2Left > div1Left)) {
    horizontalMatch = true;
  } else {
    horizontalMatch = false;
  }

  if (horizontalMatch && verticalMatch){
    let intersect = true;
    return intersect;
  } else {
    let intersect = false;
    return intersect;
  }


}
