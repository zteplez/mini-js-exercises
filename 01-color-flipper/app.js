const container = document.querySelector(".container");
const colorChangeButton = document.querySelector(".generate-btn");
const colorFlipperBtn = document.querySelector(".color-flipper");
const hexFlipperBtn = document.querySelector(".hex-flipper");
const colorText = document.querySelector(".rand-bg-color");

let isCreatingHex = false;

colorChangeButton.addEventListener("click", () => {
    if(isCreatingHex){
        let hexValues = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","A","B","C","D","E","F"];
        let newValue = "#";

        for(let i = 0; i < 6; i++){
            let random = Math.floor(Math.random() * hexValues.length);
            newValue += hexValues[random];
        }
        container.style.backgroundColor = newValue;
        colorText.innerText = "Color: " + newValue;


    }else{
        const arr = ["red", "green", "blue", "gray", "aquamarine", "tomato", "orange", "violet", "lightgray", "mediumseagreen"]
        let random = Math.floor(Math.random() * arr.length);

        if(arr[random] != container.style.backgroundColor ){
            container.style.backgroundColor = arr[random];
            colorText.innerText = "Color: " + arr[random].charAt(0).toUpperCase() + arr[random].slice(1);
        }else{
            container.style.backgroundColor = "pink";
            colorText.innerText = "Color: Pink";

        }
    }
});

hexFlipperBtn.addEventListener("click", () => {
    if(!isCreatingHex) isCreatingHex = true;
    console.log(isCreatingHex)

});
colorFlipperBtn.addEventListener("click", () => {
    if( isCreatingHex) isCreatingHex = false;
    console.log(isCreatingHex)
});