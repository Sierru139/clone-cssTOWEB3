const navbar = document.getElementById("navbar");

window.addEventListener("scroll", ()=> {
    if(window.scrollY > 100) {
        navbar.style.position = "sticky";
        navbar.style.backgroundColor = "white";
        navbar.classList.add("goDown");
    } else {
        navbar.style.position = "relative";
        navbar.style.backgroundColor = "#FCFAF7";
        navbar.classList.remove("goDown");
    }
})


// CAROUSEL 

const slider = document.querySelector('.slide-cards');

let isDragStart = false, prevPage, prevScrollLeft;

let dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = function(e) {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff
};

const dragStop = function() {
    isDragStart = false;
}

slider.addEventListener('mousemove', dragging);
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mouseup', dragStop);


// CAROUSEL SECTION TESTIMONIALS

const sliderTest = document.querySelector('#ninthSect .everySect .bottomSides .content');

let dragIsStart = false, prePageX, preScrollLeft;

let dragStarted = (e) => {
    dragIsStart = true;
    prePageX = e.pageX;
    preScrollLeft = sliderTest.scrollLeft;
}

const draggin = function(e) {
    if (!dragIsStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prePageX;
    sliderTest.scrollLeft = preScrollLeft - positionDiff
};

const dragStopin = function() {
    dragIsStart = false;
}

sliderTest.addEventListener('mousemove', draggin);
sliderTest.addEventListener('mousedown', dragStarted);
sliderTest.addEventListener('mouseup', dragStopin);