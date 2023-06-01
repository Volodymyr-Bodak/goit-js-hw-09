const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
stopBtn.disabled = true;
startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        document.querySelector('body').style.backgroundColor=
        getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
      
    }, 1000);
});

stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;


})