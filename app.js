
// -------------display LogIn and Logout Profile--------

const affLogProf = document.querySelector(".profIcon");
const profLogInOut = document.querySelector(".profLogInOut");
affLogProf.addEventListener("click", ()=>{
    profLogInOut.style.display = "flex";
});
affLogProf.addEventListener("mouseout", ()=>{
    profLogInOut.style.display = "none";
});


// Click Event of slidebar

const btn1 = document.getElementById('btn1');
const ul1 = document.getElementById('ul_1');
const vector1 = document.getElementById('vector1');
let condition1 = 'hide';

btn1.addEventListener('click', function(){
    if(condition1 === 'show'){
        ul1.style.display = 'none'
        vector1.style.transform = 'rotate(0deg)'
        condition1 = 'hide'
    }
    else if(condition1 === 'hide'){
        ul1.style.display = 'block'
        condition1 = 'show'
        vector1.style.transform = 'rotate(180deg)'
    }
})

const btn2 = document.getElementById('btn2');
const ul2 = document.getElementById('ul_2');
const vector2 = document.getElementById('vector2');
let condition2 = 'hide';

btn2.addEventListener('click', function(){
    if(condition2 === 'show'){
        ul2.style.display = 'none'
        vector2.style.transform = 'rotate(0deg)'
        condition2 = 'hide'
    }
    else if(condition2 === 'hide'){
        ul2.style.display = 'block'
        condition2 = 'show'
        vector2.style.transform = 'rotate(180deg)'
    }
})

const btn3 = document.getElementById('btn3');
const ul3 = document.getElementById('ul_3');
const vector3 = document.getElementById('vector3');
let condition3 = 'hide';

btn3.addEventListener('click', function(){
    if(condition3 === 'show'){
        ul3.style.display = 'none'
        vector3.style.transform = 'rotate(0deg)'
        condition3 = 'hide'
    }
    else if(condition3 === 'hide'){
        ul3.style.display = 'block'
        condition3 = 'show'
        vector3.style.transform = 'rotate(180deg)'
    }
})




// hide the slideBar

let is_hide = false ;
function hide_sidebar() {
    if (is_hide == false) {
        document.querySelector(".sidebar").style.display = "none";
        is_hide = true ;
        document.querySelector(".fa-solid").classList.remove("fa-arrow-left");
        document.querySelector(".fa-solid").classList.add("fa-arrow-right");
    }else{
        document.querySelector(".sidebar").style.display = "";
        is_hide = false ;
        document.querySelector(".fa-solid").classList.add("fa-arrow-left");
        document.querySelector(".fa-solid").classList.remove("fa-arrow-right");
    }};
document.querySelector(".hide-btn").addEventListener("click",hide_sidebar);