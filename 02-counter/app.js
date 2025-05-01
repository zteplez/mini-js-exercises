const counterDiv = document.querySelector(".counter-value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

let counter =  0;

decreaseBtn.addEventListener("click", () => {
    counter--;
    counterDiv.innerText = counter;
    checkStatus();
});
increaseBtn.addEventListener("click", () => {
    counter++;
    counterDiv.innerText = counter;
    checkStatus();
});
resetBtn.addEventListener("click", () => {
    counter = 0; 
    counterDiv.innerText = counter;
    checkStatus();
});

function checkStatus(){
    if(counter > 0){
        counterDiv.style.color = "green";

    }else if(counter < 0){
        counterDiv.style.color = "red";

    }else{
        counterDiv.style.color = "gray";
    }
}