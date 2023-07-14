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


