new ClipboardJS('.btn');
changeBackground();

const color1 = document.getElementById("colorA");
const color2 = document.getElementById("colorB");
const button = document.querySelector(".btn");

color1.addEventListener("input", () => {
    changeBackground();
    revert();
});
color2.addEventListener("input", () => {
    changeBackground();
    revert();
});

function success() {
    removeClass(button, "button-secondary");
    addClass(button, "button-success");
    button.value="Copied Successfully!";
}

function revert(){
    button.value = "Copy to clipboard";
    addClass(button, "button-secondary");
    removeClass(button, "button-success");
}

function changeBackground() {
    const body = document.querySelector("body");
    body.style.background =
        "linear-gradient(to right, " +
        colorA.value +
        ", " +
        colorB.value +
        ")";
    document.getElementById("cssText").value = body.style.background + ";";
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.abs(parseInt(result[1], 16) - 255),
        g: Math.abs(parseInt(result[2], 16) - 255),
        b: Math.abs(parseInt(result[3], 16) - 255)
    } : null;
}