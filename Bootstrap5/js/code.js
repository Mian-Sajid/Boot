


let nav = document.querySelector(".navigation");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

let navbar =document.querySelectorAll('.nav-link');
let collase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collase.classList.remove("show");
    })
})





document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id,start,end,duration){
        let obj= document.getElementById(id),
        current = start,
        range = end-start,
        incremnt = end > start ? 1: -1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=incremnt;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);

    }
    counter("count1",0,145,33);
    counter("count2",0,900,34);
    counter("count3",0,444,35);
    counter("count4",0,34,33);
})