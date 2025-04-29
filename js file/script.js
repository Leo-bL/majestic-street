// حركة الهيدر لما تنزل شوي 
let Hidden_head = false;
let nav_hide = false ;
window.addEventListener('scroll', function () {
    const head = document.getElementById('head');
    const nav_menu = document.querySelector('.nav-menu');
    const street = document.getElementById('street');
    const b_menu = this.document.querySelector('.b-menu');
    if (scrollY >= 650 && !Hidden_head) {
        Hidden_head = true;
        head.style.translate = `0 -100%`;
        setTimeout(() => {
            nav_menu.style.display = `none`;
            nav_menu.style.position = `absolute`;
            head.style.justifyContent = `flex-start`;
            head.style.translate = `0 0`;
        }, 500);
        setTimeout(() => {
            street.style.width = `220px`
            street.style.translate = `-5% 0`
        },800);
        setTimeout(() => {
            street.style.width = `150px`
            street.style.translate = `10% 0`
        }, 1750);
    } else if (scrollY < 650 && Hidden_head) {
        Hidden_head = false;
        head.style.translate = `0 -100%`;
        setTimeout(() => {
            nav_menu.style.display = `flex`;
            nav_menu.style.position = `static`;
            head.style.justifyContent = `space-between`;
            head.style.translate = `0 0`;
            street.style.width = `200px`
        }, 500);
    }
    // مشان ناف الجوال
    if(scrollY >= 5 && !nav_hide){
        nav_hide = true ;
        b_menu.style.translate = `0 -500%`;
    
    }else if(scrollY < 5 && nav_hide){
        nav_hide = false;
        b_menu.style.translate = `0 0`
    }
});
// ناف الجوال
const b_menu = document.querySelector('.b-menu');
const bar = document.querySelectorAll('.bar');
const menu_plus = document.querySelector('.menu-filde');
const body_plus = document.querySelector('body');
b_menu.addEventListener('click', function(){
    bar[0].classList.toggle('bar-1');
    bar[1].classList.toggle('bar-2');
    menu_plus.classList.toggle('menu-filde-plus');
    body_plus.classList.toggle('body-plus')
    console.log(b_menu)
});

// قسم حركة السلايد
let index = 0;
function moveslide(step){
    const slides = document.querySelectorAll('.slide-img');
    slides[index].classList.remove('actve')
    index +=step;
    if(index<0){
        index = slides.length-1;
    }else if(index >= slides.length){
        index = 0;
    }
    slides[index].classList.add('actve');
}
// حركة السلايد : حركة الشباب بالصور 
let models_index = 0;
function movemodels(models_step){
    const models_slides = document.querySelectorAll('.models');
    models_slides[models_index].classList.remove('actve-2')
    models_index +=models_step;
    if(models_index<0){
        models_index = models_slides.length-1;
    }else if(models_index >= models_slides.length){
        models_index = 0;
    }
    models_slides[models_index].classList.add('actve-2');
}
// حركة السلايد : حركة العناوين
let content_index = 0;
function movecontent(content_step){
    const content_slides = document.querySelectorAll('.content');
    content_slides[content_index].classList.remove('actve-3')
    content_index +=content_step;
    if(content_index<0){
        content_index = content_slides.length-1;
    }else if(content_index >= content_slides.length){
        content_index = 0;
    }
    content_slides[content_index].classList.add('actve-3');
}
//  حركة السلايد : حركة عناوين العناوين!
let prgraph_index = 0;
function movepragraph(prgraph_step){
    const prgraph_slides = document.querySelectorAll('.prgraph');
    prgraph_slides[prgraph_index].classList.remove('actve-4')
    prgraph_index +=prgraph_step;
    if(prgraph_index<0){
        prgraph_index = prgraph_slides.length-1;
    }else if(prgraph_index >= prgraph_slides.length){
        prgraph_index = 0;
    }
    prgraph_slides[prgraph_index].classList.add('actve-4');
}
setInterval(function(){
    moveslide(1);
    movemodels(1);
    movecontent(1);
    movepragraph(1);
},5000);
// قسم المنتجات 
let index_2 = 0;
const next = document.getElementById('next');
const prev = document.getElementById('prev');
function promove(pro_step){
    const product = document.querySelectorAll('.product');
    product[index_2].classList.remove('pro-actve')
    index_2 +=pro_step;
    if(index_2<0){
        index_2 = product.length-1;
    }else if(index_2 >= product.length){
        index_2 = 0;
    }
    product[index_2].classList.add('pro-actve');
}
let index_2_0 = 0;
function pmove(p_step){
    const p = document.querySelectorAll('.p-p');
    p[index_2_0].classList.remove('p-actve')
    index_2_0 +=p_step;
    if(index_2_0<0){
        index_2_0 = p.length-1;
    }else if(index_2_0 >= p.length){
        index_2_0 = 0;
    }
    p[index_2_0].classList.add('p-actve');
}
next.addEventListener('click', function(){
    promove(1);
    pmove(1);
});
prev.addEventListener('click', function(){
    promove(-1);
    pmove(-1);
});
