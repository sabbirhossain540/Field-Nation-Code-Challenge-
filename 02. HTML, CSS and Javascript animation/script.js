
let mainareaHeight = document.getElementById("mainarea").offsetHeight;
let blue_box = document.getElementById("box");
let direction = 0; 

const boxAnimator = () => {

    let PositionLeft = blue_box.offsetLeft;
    let PositionTop = blue_box.offsetTop;

    if ((PositionLeft + 100) >= screen.width || (PositionTop + 100) >= mainareaHeight) {
        direction = 1;
    } else if (blue_box.offsetLeft < 0) {
        direction = 0;
    }

    if (direction == 0) {
        PositionLeft = PositionLeft + 10;
        PositionTop = PositionTop + 10;
    } else {
        PositionLeft = PositionLeft - 10;
        PositionTop = PositionTop - 10;
    }

    blue_box.style.left = PositionLeft + "px";
    blue_box.style.top = PositionTop + "px";

    setTimeout(function () { boxAnimator() }, 1000);
}

setTimeout(function () { 
	boxAnimator();
}, 1000);

