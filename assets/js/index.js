const stLeft = document.querySelectorAll('.staLeft');
const motorbikes = document.querySelectorAll('.motorbike');
const allMotorbikes = motorbikes.length;
const intervalTime = 3000; 

let motoStart = 0;
let intervalId = null;

function autoRoll() {
    motoStart++;
    if (motoStart >= allMotorbikes) {
        motoStart = 0;
    }
    motorbikes.forEach(motorbike => motorbike.classList.remove('motorbikeSelected'));
    motorbikes[motoStart].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    });
    motorbikes[motoStart].classList.add("motorbikeSelected");
    
    const text = motorbikes[motoStart].getAttribute("data-text");
    const pElement = document.querySelector("#imagens p");
    pElement.textContent = text;
}


intervalId = setInterval(autoRoll, intervalTime);

stLeft.forEach(stLeft => {
    stLeft.addEventListener('click', () => {
        clearInterval(intervalId); 
        const left = stLeft.classList.contains("staLeft");
        if (left) {
            motoStart -= 1;
        } else {
            motoStart += 1;
        }
        if (motoStart >= allMotorbikes) {
            motoStart = 0;
        }
        if (motoStart < 0) {
            motoStart = allMotorbikes - 1;
        }
        motorbikes.forEach(motorbike => motorbike.classList.remove('motorbikeSelected'));
        motorbikes[motoStart].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });
        motorbikes[motoStart].classList.add("motorbikeSelected");
        intervalId = setInterval(autoRoll, intervalTime);
    });
});
