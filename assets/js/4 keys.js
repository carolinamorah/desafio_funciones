
let color = '';

document.addEventListener('keydown', function (event) {
    let selector = document.getElementById('selectKey');
        switch(event.key.toLowerCase()) {
            case 'a':
                selector.innerHTML='A'
                selector.style.backgroundColor = 'cornsilk'
                color = 'cornsilk' // valor
                break;
            case 's':
                selector.innerHTML='S'
                selector.style.backgroundColor = 'aliceblue'
                color = 'aliceblue' // valor
                break;
            case 'd':
                selector.innerHTML='D'
                selector.style.backgroundColor = 'lavenderblush'
                color = 'lavenderblush' // valor
                break;
            default:
                selector.innerHTML=''
                selector.style.backgroundColor = 'white'
                color = '' 
        }


})

const caja1 = document.getElementById('box1');
const caja2 = document.getElementById('box2');
const caja3 = document.getElementById('box3');
const caja4 = document.getElementById('box4');

caja1.addEventListener('click',() => caja1.style.backgroundColor = color);
caja2.addEventListener('click', () => caja2.style.backgroundColor = color);
caja3.addEventListener('click', () => caja3.style.backgroundColor = color);
caja4.addEventListener('click', () => caja4.style.backgroundColor = color);