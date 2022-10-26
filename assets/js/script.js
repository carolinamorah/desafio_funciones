// 3 SCRIPT ORIGINAL


/* function pintar(){
        ele = document.getElementById("ele1");
        ele.style.backgroundColor = 'yellow'
    }

    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);
*/

// 3.1


const ele = document.getElementById("ele1")

function pintar(){
    ele.style.backgroundColor = 'yellow'
}

ele.addEventListener("click", pintar);




// 3.2


/*
const ele = document.getElementById("ele1")

function pintar(color = 'green'){
    ele.style.backgroundColor = color
}

ele.addEventListener("click", () => pintar('yellow'));
*/

