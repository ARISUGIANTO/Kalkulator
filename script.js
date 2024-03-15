const layar = document.querySelector(".layar");
const buttons = document.querySelectorAll("button");

let output = "";

const calculate = (btnValue) => {
    layar.focus();
    if (btnValue === "=") {
        try {
            let expression = output.replace(/x/g, "*").replace(/÷/g, "/");
            output = eval(expression);
            layar.value = output;
        } catch (error) {
            layar.value = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
        layar.value = output;
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
        layar.value = output;
    } else {
        output += btnValue;
        layar.value = output;
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
