const btn = document.getElementById("btn");
const textInput = document.getElementById("text-input");


let flag = false;
btn.addEventListener('click', () => {
    if (flag) {
        textInput.style.width = "0px";
    } else {
        textInput.style.width = "200px";
    }
    flag = ~flag;
   
})
