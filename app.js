let start = document.getElementById("start");
let road = document.getElementById("road");
let score = document.getElementById("score");

let enemyCar1 = document.getElementById("enemyCar1");
let enemyCar2 = document.getElementById("enemyCar2");
let enemyCar3 = document.getElementById("enemyCar3");
let enemyCar4 = document.getElementById("enemyCar4");


start.addEventListener("click", function(){
    start.style.display = 'none';
    road.style.animation = 'roadAnimation 40s linear infinite';


    setInterval(()=>{
        num = Math.floor(Math.random()*(-15+13)-13)              //value of 'left' is written in this
        enemyCar1.style.left = `${num}rem`;
    },6000);

    setInterval(()=>{
        num = Math.floor(Math.random()*(-7+5+1)-5)              //value of 'left' is written in this
        enemyCar2.style.left = `${num}rem`;
    },9000);

    setInterval(()=>{
        num = Math.floor(Math.random()*(5-3 + 1)+3)              //value of 'left' is written in this
        enemyCar3.style.left = `${num}rem`;
    },15000);

    setInterval(()=>{
        num = Math.floor(Math.random()*(15-13+1)+13)              //value of 'left' is written in this
        enemyCar4.style.left = `${num}rem`;
    },11000);


    enemyCar1.style.animation = 'eCar1 infinite linear 6s';
    enemyCar2.style.animation = 'eCar2 infinite linear 9s';
    enemyCar3.style.animation = 'eCar3 infinite linear 15s';
    enemyCar4.style.animation = 'eCar4 infinite linear 11s';

    let t = 17;  //as we have given top value in css 17vh so we are writing this ...
    let l = 0;      //as we have given 0 value of left in css

    window.addEventListener("keydown", function(x){
        
        if(x.code == 'KeyW' || x.code == 'ArrowUp'){             //we are not using x.keycode == 87 because it is depreciated 
            t = t-3;                //we can change the speed of moving car when W is pressed by (subtrating more or less value with t)
        }

        if(x.code == 'KeyA' || x.code == 'ArrowLeft'){
            l = l-1;
        }

        if(x.code == 'KeyS' || x.code == 'ArrowDown'){
            t = t+3;
        }

        if(x.code == 'KeyD' || x.code == 'ArrowRight'){
            l = l+1;
        }

        document.getElementById("myCar").style.top = `${t}vh`;
        document.getElementById("myCar").style.left = `${l}vw`;
    });


    let n = 0;
    setInterval(()=>{

        score.innerText = `score : ${n}`;
        n++;
    },100);


});




