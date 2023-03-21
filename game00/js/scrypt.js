
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let vaia = document.querySelector('#vaia');
let pular = document.querySelector('#pulo');
let count = 0;

let html = document.querySelector("html");
let musica = document.querySelector("#musica");

    html.addEventListener('keydown', () => {
        musica.play();
    })


const jump = () => {
    var pulo=event.keyCode;
    if(pulo==32){
    mario.classList.add('jump');
    pular.play();
    setTimeout(() => {
        mario.classList.remove('jump'); 
    }, 500);
}
}

const loop = setInterval(() => {

    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(pipePosition < 120 && pipePosition > 0 && marioPosition < 90){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom  = `${marioPosition}px`;
        mario.src ="./img/gameover.gif";

        
        musica.pause();
        vaia.play();
        
        mario.style.marginLeft = "50px";

        

        clearInterval(loop); 
    }
    count++;
        score.innerHTML = ` Score: ${count}`;
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);