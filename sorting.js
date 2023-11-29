let arr = [50, 40, 30, 20, 10, 60, 80, 45, 65, 70, 55, 12, 17, 27, 34, 39];
let parentDiv = document.getElementsByClassName('parentDiv');
let btn = document.getElementsByClassName('startbtn');

let i = 0;
arr.forEach((e) => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = e * 6 + 'px';
    innerDiv.style.backgroundColor = '#' + (Math.random() * 0xffffff << 0).toString(16);
    innerDiv.style.width = 20 + 'px';
    innerDiv.setAttribute('id', 'elem' + i);
    i++;
    innerDiv.classList.add('innerDiv');
    parentDiv[0].appendChild(innerDiv);
});

btn[0].addEventListener("click", () => myFunction(arr));

function sleep(callback, time) {
    setTimeout(callback, time);
}

function myFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            sleep(() => {
                if (arr[j] > arr[j + 1]) {
                    swapNumber(arr, j);
                    swapColorHeight(j);
                }
            }, 20);
        }
    }
}

function swapNumber(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

function swapColorHeight(j) {
    let a = 'elem' + j;
    let b = 'elem' + (j + 1);
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;
    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;

    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
}
