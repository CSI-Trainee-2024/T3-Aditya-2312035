let start = document.getElementById("start");
let road = document.getElementById("road");
let score = document.getElementById("score");

let enemyCar1 = document.getElementById("enemyCar1");
let enemyCar2 = document.getElementById("enemyCar2");
let enemyCar3 = document.getElementById("enemyCar3");
let enemyCar4 = document.getElementById("enemyCar4");

let eCar1 = document.getElementById("eCar1");
let eCar2 = document.getElementById("eCar2");
let eCar3 = document.getElementById("eCar3");
let eCar4 = document.getElementById("eCar4");

let myCar = document.getElementById("myCarImg");


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
    },18000);

    setInterval(()=>{
        num = Math.floor(Math.random()*(15-13+1)+13)              //value of 'left' is written in this
        enemyCar4.style.left = `${num}rem`;
    },11000);


    enemyCar1.style.animation = 'eCar1 infinite linear 6s';
    enemyCar2.style.animation = 'eCar2 infinite linear 9s';
    enemyCar3.style.animation = 'eCar3 infinite linear 18s';
    enemyCar4.style.animation = 'eCar4 infinite linear 11s';

    let t = 17;  //as we have given top value in css 17vh so we are writing this ...
    let l = 0;      //as we have given 0 value of left in css

    window.addEventListener("keydown", function(x){
        
        if(x.code == 'KeyW' || x.code == 'ArrowUp'){             //we are not using x.keycode == 87 because it is depreciated 
            t = t-3;                //we can change the speed of moving car when W is pressed by (subtrating more or less value with t)
        }

        if(x.code == 'KeyA' || x.code == 'ArrowLeft'){
            l = l-2;
        }

        if(x.code == 'KeyS' || x.code == 'ArrowDown'){
            t = t+3;
        }

        if(x.code == 'KeyD' || x.code == 'ArrowRight'){
            l = l+2;
        }

        document.getElementById("myCar").style.top = `${t}vh`;
        document.getElementById("myCar").style.left = `${l}vw`;
    });


    let n = 0;
    setInterval(()=>{

        score.innerText = `score : ${n}`;
        n++;    

        let eCar1_left = Math.abs(eCar1.getBoundingClientRect().left);      //to get the left boundry of the image
        let eCar1_right = Math.abs(eCar1.getBoundingClientRect().right);      
        let eCar1_top = Math.abs(eCar1.getBoundingClientRect().top);      
        let eCar1_bottom = Math.abs(eCar1.getBoundingClientRect().bottom);      

        let eCar2_left = Math.abs(eCar2.getBoundingClientRect().left);      //getBoundingClientRect for boundary of img
        let eCar2_right = Math.abs(eCar2.getBoundingClientRect().right);      
        let eCar2_top = Math.abs(eCar2.getBoundingClientRect().top);      
        let eCar2_bottom = Math.abs(eCar2.getBoundingClientRect().bottom);  

        let eCar3_left = Math.abs(eCar3.getBoundingClientRect().left);      
        let eCar3_right = Math.abs(eCar3.getBoundingClientRect().right);      
        let eCar3_top = Math.abs(eCar3.getBoundingClientRect().top);      
        let eCar3_bottom = Math.abs(eCar3.getBoundingClientRect().bottom);  

        let eCar4_left = Math.abs(eCar4.getBoundingClientRect().left);      
        let eCar4_right = Math.abs(eCar4.getBoundingClientRect().right);      
        let eCar4_top = Math.abs(eCar4.getBoundingClientRect().top);      
        let eCar4_bottom = Math.abs(eCar4.getBoundingClientRect().bottom);  

        let myCar_left = Math.abs(myCar.getBoundingClientRect().left);      
        let myCar_right = Math.abs(myCar.getBoundingClientRect().right);      
        let myCar_top = Math.abs(myCar.getBoundingClientRect().top);      
        let myCar_bottom = Math.abs(myCar.getBoundingClientRect().bottom);  


        //writing this so that the our car will not go outside of the track
        
        if(myCar_left < 450 || myCar_right > 1050 || myCar_top < 20 || myCar_bottom > 740){
            setTimeout(()=>{
                alert(`GAME OVER!!!`);
            })
            location.reload();
        }


        //inside if condition - condition is that boundary checking either from left & right or top & bottom
        if(((eCar1_left<myCar_left && myCar_left<eCar1_right) || (eCar1_left<myCar_right && myCar_right<eCar1_right)) && 
        ((eCar1_top<myCar_top && myCar_top<eCar1_bottom) || (eCar1_top<myCar_bottom && myCar_bottom<eCar1_bottom))){

            setTimeout(()=>{     //not given time in setTimeout means it will run as soon as possible after next callback
                alert(`GAME OVER!!!`);
            })
            location.reload();          
        }

        if(((eCar2_left<myCar_left && myCar_left<eCar2_right) || (eCar2_left<myCar_right && myCar_right<eCar2_right)) && 
        ((eCar2_top<myCar_top && myCar_top<eCar2_bottom) || (eCar2_top<myCar_bottom && myCar_bottom<eCar2_bottom))){

            setTimeout(()=>{
                alert(`GAME OVER!!!`);
            })
            location.reload();
        }

        if(((eCar3_left<myCar_left && myCar_left<eCar3_right) || (eCar3_left<myCar_right && myCar_right<eCar3_right)) && 
        ((eCar3_top<myCar_top && myCar_top<eCar3_bottom) || (eCar3_top<myCar_bottom && myCar_bottom<eCar3_bottom))){

            setTimeout(()=>{
                alert(`GAME OVER!!!`);
            })
            location.reload();
        }

        if(((eCar4_left<myCar_left && myCar_left<eCar4_right) || (eCar4_left<myCar_right && myCar_right<eCar4_right)) && 
        ((eCar4_top<myCar_top && myCar_top<eCar4_bottom) || (eCar4_top<myCar_bottom && myCar_bottom<eCar4_bottom))){

            setTimeout(()=>{                
                alert(`GAME OVER!!!`);
            })
            location.reload();              //reloads the page 
        }

    },100);


});




