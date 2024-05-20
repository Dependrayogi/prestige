let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}
if(pageName === "services.html"){
    document.querySelector(".services").classList.add("activeLink");
}
if(pageName === "careers.html"){
    document.querySelector(".careers").classList.add("activeLink");
}
if(pageName === "contact.html"){
    document.querySelector(".contact").classList.add("activeLink");
}

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-1');
        } else{
            entry.target.classList.remove('show-1');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.hidden-1')
hiddenElements1.forEach((el) => observer1.observe(el));


var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbtn = document.querySelector(".wel-btn");
var popupform = document.querySelector(".main-requset-form")

addpopupbtn.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
    popupform.style.display="block"

});

var cancelbutton = document.querySelector(".cancel-class")

cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    popupform.style.display="none";

})

var requsetpopup = document.getElementById("inslide-btn")

requsetpopup.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
    popupform.style.display="block"

});