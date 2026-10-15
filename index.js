const menuButton = document.getElementById("hamburger");

menuButton.addEventListener("click", (event) => {
    document.body.classList.toggle("menuHidden");
});

const coursesLink = document.getElementById("coursesLink");
const clubsLink = document.getElementById("clubs");
const collegesLink = document.getElementById("collegesLink");

const courseMenu = document.getElementById("classis");
const clubMenu = document.getElementById("clubss");

coursesLink.addEventListener("click", (event) => {
    courseMenu.classList.add("open");
    clubMenu.classList.remove("open");
});

clubsLink.addEventListener("click", (event) => {
    clubMenu.classList.add("open");
    courseMenu.classList.remove("open");
});

collegesLink.addEventListener("click", (event) => {
    courseMenu.classList.remove("open");
    clubMenu.classList.remove("open");
});

const slides = [
    "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
];

let currentSlide = 0;
const slideImage = document.getElementById("slidepic");
const nextButton = document.getElementById("foward");
const prevButton = document.getElementById("back");

nextButton.addEventListener("click", (event) => {
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    slideImage.src = slides[currentSlide];
});

prevButton.addEventListener("click", (event) => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slideImage.src = slides[currentSlide];
});


