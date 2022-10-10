
score=0;
cross=true;

audio = new Audio('gameaudio.mpeg');
setTimeout(()=>{
    audio.play();
},1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if(e.keyCode==32){
        buzz=document.querySelector('.buzz');
        buzz.classList.add('animatebuzz');
        setTimeout(() => {
            buzz.classList.remove('animatebuzz')
        }, 700);
    }
    if(e.keyCode==39){
        buzz = document.querySelector('.buzz');
        buzzX = parseInt(window.getComputedStyle(buzz, null).getPropertyValue('left'));
        buzz.style.left = buzzX + 10 + "px";  
    }   
    if(e.keyCode==37){
        buzz = document.querySelector('.buzz');
        buzzX = parseInt(window.getComputedStyle(buzz, null).getPropertyValue('left'));
        buzz.style.left = (buzzX - 10) + "px";  
    }   
 }

var abc=setInterval(() => {
    buzz = document.querySelector('.buzz');
    gameover = document.querySelector('.gameover');
    enemy = document.querySelector('.enemy');

    dx = parseInt(window.getComputedStyle(buzz, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(buzz, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX < 73 && offsetY < 52){
        gameover.style.visibility = 'visible';
        enemy.classList.remove('enemyAni');
        buzz.classList.remove('.animatebuzz');
        document.onkeydown=null;
        clearInterval(abc);

    }else if( offsetX < 145 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000 );
        setTimeout(() => {
            anidurr = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue('animation-duration'));
        newdurr = anidurr-0.1;
        enemy.style.animationDuration = newdurr + 's';
        },500 );
    }
    
    
}, 10);

function updatescore(score){
   scorecont.innerHTML = "YOUR SCORE : "+ score;
}

