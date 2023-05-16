var data = new Date();

let myAge = document.querySelector('#myAge')

if (data.getMonth() < 8 && data.getDay() < 24) {
    myAge.innerText = (data.getFullYear() - 1989) - 1
} else {
    myAge.innerText = data.getFullYear() - 1989
}

// 2021

