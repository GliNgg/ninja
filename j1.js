document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    let yesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let noFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);

    noButton.addEventListener("click", function () {
        yesFontSize += 5;
        yesButton.style.fontSize = yesFontSize + "px";
        noFontSize = Math.max(5, noFontSize - 2);
        noButton.style.fontSize = noFontSize + "px";
    });

    yesButton.addEventListener("click", function () {
        document.body.innerHTML = "";
        const message = document.createElement("p");
        message.className = "yay";
        message.textContent = "Yay!";
        document.body.appendChild(message);

        const gifPaths = [
            "assets/a-lovely-tuji-hug.gif",
            "assets/cute-cat.gif",
            "assets/happycat.gif",
            "assets/icegif-89.gif",
            "assets/tkthao219-bunny.gif"
        ];

        const fixedPositions = [
            { left: "20px", top: "20px" },
            { left: "80%", top: "10%" },
            { left: "10%", top: "70%" },
            { left: "50%", top: "80%" },
            { left: "75%", top: "50%" }
        ];

        gifPaths.forEach((path, index) => {
            const gif = document.createElement("img");
            gif.src = path;
            gif.className = "yay-gif";
            gif.style.position = "absolute";
            gif.style.left = fixedPositions[index].left;
            gif.style.top = fixedPositions[index].top;
            document.body.appendChild(gif);
        });
    });
});
