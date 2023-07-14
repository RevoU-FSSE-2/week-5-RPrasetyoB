const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}

const boxleft = document.querySelectorAll('.boxleft');
window.addEventListener('scroll', checkBoxesLeft);
checkBoxesLeft();
function checkBoxesLeft(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxleft.forEach(boxleft =>{
        const boxTop = boxleft.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            boxleft.classList.add('show');
        }else {
            boxleft.classList.remove('show');
        }
    })
}

document.getElementById('toggle').addEventListener('click', function(){
    document.getElementById('nav-mobile').classList.toggle('active');
})

var back = document.getElementById('prev');
back.onclick = function () {
    var container = document.getElementById('wrapper');
    container.scrollLeft -= 290;
};

var button = document.getElementById('next');
button.onclick = function () {
    var container = document.getElementById('wrapper');
    container.scrollLeft += 290;
};


