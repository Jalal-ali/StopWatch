const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const startBtn = document.querySelector("#start-btn");

let startInterval ;
let seconds = 0 ;
let minutes = 0 ;
let hours = 0 ;
function start() {
    // startBtn.disabled = true ;
    startBtn.style.display = 'none';
    startBtn.disabled = true;

    startInterval = setInterval(function () {
        seconds += 1;
        if(seconds <=60){
            secs.innerHTML = seconds;
        }else{
            secs.innerHTML = '00';
            seconds = 0;
        }
        if(seconds == 60 ){
            minutes += 1 ;
            mins.innerHTML = minutes ;
        }
        if(minutes == 60){
            hours += 1;
            hrs.innerHTML = hours ;
            minutes = 0;
            //     // seconds = 0;
        }
        
    }, 1000);
    
}

function stop(){
    clearInterval(startInterval);
    startBtn.style.display = 'inline';
    startBtn.disabled = false;
}
function reset(){
    startBtn.style.display = 'inline';
    startBtn.disabled = false;
    seconds = 0 ;
    secs.innerHTML = '0' + seconds;
    minutes = 0 ;
    mins.innerHTML = '0' + minutes ;
    hours = 0 ;
    hrs.innerHTML = '0' + hours ;
    clearInterval(startInterval);
}