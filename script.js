var scrolltoservices=document.querySelector('.services');
var scrolltocontact=document.querySelector(".contact");
//Change navbar on scoll
function scrollValue() {
    var navbar = document.querySelector('.navhead');
    var scroll = window.scrollY;
    if (scroll < 530) {
        navbar.classList.remove('navhead2');
    } else {
        navbar.classList.add('navhead2');
    }
}
window.addEventListener('scroll', scrollValue);


//Scrolling to a specific element on click
document.querySelector(".navservices").addEventListener("click",scrollservice);
document.querySelector(".navcontact").addEventListener("click",funcscrolltocontact);
//scrolls to service
function scrollservice(){
    scrolltoservices.scrollIntoView();
};
//scrolls to contact
function funcscrolltocontact(){
    scrolltocontact.scrollIntoView();
}

window.addEventListener("scroll",revealfunc);

function revealfunc(){
    var items=document.querySelectorAll(".reveal");
    for(var i=0;i<items.length;i++){
        var windowheight=window.innerHeight;
        var scrollheight=0;
        var view=items[i].getBoundingClientRect().top;
        if(view<windowheight-scrollheight){
            items[i].classList.add("active");
        }
        else{
            items[i].classList.remove("active");
        }

    }
}