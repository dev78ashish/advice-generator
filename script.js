const cube = document.getElementById("cube")
let number = document.getElementById("number").innerText
number = parseInt(number)


function handleClick(e) {
    document.getElementById("main-advice").innerText = '"Loading....."'
    number = number + 1
    document.getElementById("number").innerText = "#" + number
    const timestamp = new Date().getTime();
    const apiUrl = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;
    fetch(apiUrl).then(response => response.json()).then(data => {
        document.getElementById("main-advice").innerText = '"' + data.slip.advice + '" '
    })
}


cube.addEventListener('click', handleClick);