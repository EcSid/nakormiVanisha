let balls = [...document.querySelectorAll(".pizz")];
const vanyaShd = document.querySelector(".vanyaShd");
const vanyaEst = document.querySelector(".vanyaEst");
const vanyaRad =  document.querySelector(".vanyaRad");
let index;

let bool = false;
let finds;
let arrEqual = true;

setTimeout(() => document.body.classList.remove("hidden"), 2000)
for (let ball of balls) {
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
            if (bool) addRemove(index);
            };
        
        };

        ball.ondragstart = function() {
            return false;
        };
};



function check () {
     for (let ball of balls) {
        if (detectTouching(ball, vanyaShd)) {
            vanyaShd.classList.add("hidden");
            vanyaEst.classList.remove("hidden");
            balls.forEach((elem, ind) => {
                if (ball.isEqualNode(elem)) {
                    index = ind;
                }
            });
            bool = true;
        }
     }
};

setInterval(() => check(), 20);
setInterval(() => {
    finds = balls.filter((elem) => elem.classList.contains("hidden"));
    arrIsEqual(finds, balls);
}, 100)

function arrIsEqual(arr1, arr2) {
    
    if (arr1.length != arr2.length) { 
        return;
    } else {
        setTimeout(() => {
            document.querySelector(".feedHim").textContent = ". . ."
            vanyaEst.classList.add("hidden");
            vanyaShd.classList.add("hidden");
            vanyaRad.classList.remove("hidden");
        }, 1000)
        setTimeout(() => {
            window.location.href = "level11(end).html";
        }, 7000)
        
    } 
};

setTimeout(() => document.querySelector(".feedHim").textContent = "ОН ХОЧЕТ ЕЩЁ ПИЦЦЫ!", 7000);
setTimeout(() => document.querySelector(".feedHim").textContent = "БОЛЬШЕ, БОЛЬШЕ!", 12000);



function addRemove(index) {
    balls[index].classList.add("pizzaRem");
    bool = false;

    setTimeout(() => {
        balls[index].classList.add("hidden");
        vanyaShd.classList.remove("hidden");
        vanyaEst.classList.add("hidden");
    }, 500); 
}


function detectTouching(i, j) {

    i = i.getBoundingClientRect();
    j = j.getBoundingClientRect();
   
    return i.top + i.height > j.top && 
          i.left + i.width > j.left && 
          i.bottom - i.height < j.bottom && 
          i.right - i.width < j.right
};
