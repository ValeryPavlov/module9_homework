//Задание №4.

let addTime = document.getElementById('button');
const images = document.getElementById('output');
const error = document.getElementById('error');

addTime.addEventListener('click', getN);

function getN() {
    let getNum = addTime.getElementById('get_num').value;
    let getNumSecond = document.getElementById('get_num_second').value;
    if(getNum > 99 && getNum < 300 && getNumSecond > 99 && getNumSecond < 300){
        fetch(`https://picsum.photos/${getNum}/${getNumSecond}`)
            .then((response) => {
                let img = document.createElement('img');
                img.setAttribute('src', response.url);
                img.setAttribute('width', '200px');
                images.appendChild(img);
            });
    }
    else {
        let error = "Число вне диапазона от 100 до 300";
        writeOutput(error);
    }
}


function writeOutput(message) {
    error.innerText = message;
}
