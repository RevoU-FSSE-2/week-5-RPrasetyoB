var back = document.getElementById('prev');
back.onclick = function () {
    var container = document.getElementById('wrapper');
    container.scrollLeft -= 320;
};

var button = document.getElementById('next');
button.onclick = function () {
    var container = document.getElementById('wrapper');
    container.scrollLeft += 320;
};

