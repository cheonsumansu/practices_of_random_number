const toNumber = document.querySelector(".rand_range .to input");
const fromNumber = document.querySelector(".rand_range .from input");
const generNumber = document.querySelector(".generate input");
buttonMath = document.querySelector(".btn_generate");

buttonMath.addEventListener("click", e=> {
    e.preventDefault();
    getRandomList(); 
})

function getRandomList() {
    let maxValue = Number(toNumber.value);
    let minValue = Number(fromNumber.value);
    let pickValue = Number(generNumber.value);
    if (maxValue=="" || maxValue>100) {
        toNumber.value = "100";
        maxValue = 100;
    }
    if (minValue=="" || minValue<1) {
        fromNumber.value = "1";
        minValue = 1;
    }
    if (pickValue=="") {
        generNumber.value = "10";
        pickValue = 10;
    } else if (pickValue>20) {
        generNumber.value = "20";
        pickValue = 20;
    } else if (pickValue<1) {
        generNumber.value = "1";
        pickValue = 1;
    }

    let randList = [];
    let i = 0;
    while (i<pickValue) {
        let rn = makeRandom(maxValue, minValue);
        if (! removeDuplication(rn, randList)) {
            randList.push(rn);
            i++;
        }
    }
    randList.sort(function (a, b) {
        if (a>b) return 1;
        else if (a<b) return -1; 
        return 0;
    });
    numberList = document.querySelector(".randnumber_list");
    numberList.insertAdjacentHTML("afterbegin",`<div class="wrapper"> </div>`);
    numberWrapper = document.querySelector(".wrapper");
    for (let i=0; i<randList.length; i++) {
            numberWrapper.insertAdjacentHTML("beforeend", `<span>${randList[i]}</span>`);
    }
}

function makeRandom(max, min) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function removeDuplication(num, lst) {
    for (let i=0; i<lst.length; i++) {
        if (num==lst[i]) {
            return true;
        }
    }
    return false;
}