
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    let yesScale = 1; 
    let noFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);

    noButton.addEventListener("click", function () {
        yesScale += 0.5; 
        yesButton.style.transform = `scale(${yesScale})`;

        noFontSize = Math.max(5, noFontSize - 2); 
        noButton.style.fontSize = noFontSize + "px";
    });

    yesButton.addEventListener("click", function () {
        const message = document.createElement("p");
        message.textContent = "Yay!";
        document.body.appendChild(message);
    });
yesButton.addEventListener("click", function () {
        document.body.innerHTML = ""; // Clear everything
        const message = document.createElement("p");
        message.className = "yay";
        message.textContent = "Yay!";
        document.body.appendChild(message);
    });
});