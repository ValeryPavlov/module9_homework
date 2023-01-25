//Задание №3.

let addTime = document.getElementById('button');
const images = document.getElementById('output');
const error = document.getElementById('error');

addTime.addEventListener('click', getN);

function getN() {
        let getNum = document.getElementById('get_num').value;
        if(getNum < 11 && getNum > 0){
                let xhr = new XMLHttpRequest();
                xhr.onload = function () {
                        console.log(`Статус: ${xhr.status}`)
                        let data = JSON.parse(xhr.response)

                        data.forEach((image) => {
                                let img = document.createElement('img')
                                img.setAttribute('src', image.download_url)
                                img.setAttribute('width', '200px')
                                images.appendChild(img)
                        })
                }
                xhr.open("GET",`https://picsum.photos/v2/list?limit=${getNum}`);
                xhr.send();
        }
        else {
                let error = "Число вне диапазона от 1 до 10";
                writeOutput(error);
        }
}


function writeOutput(message) {
        error.innerText = message;
}