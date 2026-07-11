let gameSeq = [];
let usrSeq = [];

let btns = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

let start = false;
let level = 0;
let highScr = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game Started");
        start = true;

        levelUp();
    }
});

function levelUp() {
    usrSeq = [];
    level++;
    h2.innerText = `Score ${level}`;

    let randoIdx = Math.floor(Math.random() * 9);
    let randoColor = btns[randoIdx];
    let randoBtn = document.querySelector(`.${randoColor}`)
    gameSeq.push(randoColor)
    btnFlash(randoBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 350)
}

function usrFlash(btn) {
    btn.classList.add("usrflash");
    setTimeout(function () {
        btn.classList.remove("usrflash");
    }, 200)
}

function checkAns(idx) {
    if (usrSeq[idx] === gameSeq[idx]) {
        if (usrSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        } else {

        }
    } else {
        h2.innerHTML = `Game Over! <br/>Your Score was <b>${level}</b> <br/> Press Any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#5a1419";
        }, 500)
        reset();
    }
}

function btnPressed() {
    let btn = this;
    usrFlash(btn);
    usrNmbr = btn.getAttribute("id");
    usrSeq.push(usrNmbr);
    checkAns(usrSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPressed);
}

function reset() {
    start = false;
    gameSeq = [];
    usrSeq = [];
    level = 0;
}