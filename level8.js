const ball = document.querySelector(".pizza");
const vanyaShd = document.querySelector(".vanyaShd");
const vanyaEst = document.querySelector(".vanyaEst");
let enemies = document.querySelectorAll(".enemy");
const dontTouch = document.querySelector(".dontTouch");
const timerDT = document.querySelector(".timerDT");
const wallB = document.querySelector(".wallBot");
const wallR = document.querySelector(".wallRig");
const span = document.querySelector("span");
const span1 = document.querySelector(".span1");


let booLL = false;
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

  
ball.ondragstart = function() {
    return false;
  };
  


function check () {
    let rectIvan = vanyaShd.getBoundingClientRect();
    let rect = ball.getBoundingClientRect();
    if ((rect.top > rectIvan.top && rect.bottom < rectIvan.bottom) && (rect.left > rectIvan.left && rect.right < rectIvan.right)) {
        vanyaShd.classList.add("hidden");
        vanyaEst.classList.remove("hidden");
        bool = true;
    } else if (detectTouching(ball, dontTouch)) {
        timerDT.classList.remove("hidden");
        setTimeout(() => { 
            
            wallB.classList.remove("hidden");
            wallR.classList.remove("hidden");
            dontTouch.classList.add("hidden");
       }, 500);
       
        setTimeout(() => { 
            
            span.textContent = "А теперь подумай над своим поведением!";
          
       }, 3000); 
       waiting();
    } else if (detectTouching(ball, wallB)) {
        window.location.href = "GameOver.html";
    } else if (detectTouching(ball, wallR)) {
        window.location.href = "GameOver.html";
    }
    for (let enemy of enemies) {
        if (detectTouching(ball, enemy)) {
            window.location.href = "GameOver.html";
        }
    }

    
   
    /*
    if ((rect.top > rectIl3.top && rect.bottom < rectIl3.bottom) && (rect.left > rectIl3.left && rect.right < rectIl3.right)) {
      window.location.href = "GameOver.html";
    };
    */
};

setInterval(() => check(), 20)




function addRemove() {
    ball.classList.add("ballRem");
    setTimeout(() => {
      window.location.href = "level08.html";
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

function waiting() {
    let time;
    setTimeout(() => { 
        span1.classList.remove("hidden");
        time = 20;
    }, 3000);
   
    let timer = setInterval(() => {
        if (time === 0 || time === "0") {
            wallB.classList.add("hidden");
            timerDT.classList.add("hidden");
            clearInterval(timer);
        } else {
            span1.innerHTML = `${time--}`;
        }
    }, 1000);
     
    
}