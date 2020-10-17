// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
// console.log('Hello World');
// }

// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// })
let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

function myAnimation () {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

<<<<<<< HEAD
//кнопки после анимации, наследование

=======
>>>>>>> 359b5321de44b67d7b3511a62fd25893cf0679b9
let btnBlock = document.querySelector('.btn-block')
let btns = document.getElementsByTagName('button');


btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Hello');
    }

})