window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 101); //0-.99999
        // percentage = 3;
        
        document.getElementById("result-message").innerText = `A probabilidade de dar certo entre ${yourName} e ${crushName} é `
        document.getElementById("result-porc").innerText = percentage.toString() + "%";
    }
}