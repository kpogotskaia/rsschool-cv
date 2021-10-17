// update skills line
const updateSkills = function(){
    const arSkills = document.querySelectorAll('.cv-skills-item');
    for (let i = 0; i < arSkills.length; i++) {
        let dataEx = arSkills[i].getAttribute('data-ex');
        let innerSpan = document.createElement('span');
        innerSpan.style.width = `${dataEx}%`;
        arSkills[i].appendChild(innerSpan);
    }
};
updateSkills();

// create mobile menu
const createMobMenu = function(){
    const body = document.querySelector('.cv');
    
    const Menu = document.querySelector('.nav_menu');
    let Menu2 = Menu.cloneNode(true);
    Menu2.classList.remove('nav_menu_desktop');

    let innerDivCloser = document.createElement('div');
    innerDivCloser.classList.add("nav_toggle_hidde");
    innerDivCloser.setAttribute("onclick","hiddeMobMenu('');");

    let innerDiv = document.createElement('div');
    innerDiv.classList.add("nav_mobmenu");
    innerDiv.appendChild(Menu2);
    innerDiv.appendChild(innerDivCloser);
    
    const mob_nav_link = innerDiv.querySelectorAll('.nav_link');
    for (let index = 0; index < mob_nav_link.length; index++) {
        mob_nav_link[index].setAttribute("onclick","hiddeMobMenu('');");
    }

    body.appendChild(innerDiv);
}
createMobMenu();

const showMobMenu = function(){ 
    const burger_menu = document.querySelector('.burger_menu');
    burger_menu.classList.remove('nav_toggle');
    burger_menu.classList.add("nav_toggle_hidde2");
    burger_menu.setAttribute("onclick","hiddeMobMenu('');");

    const blockMenu = document.querySelector('.nav_mobmenu');
    fadeIn(blockMenu, 1)
}

const hiddeMobMenu = function(){
    const burger_menu = document.querySelector('.burger_menu');
    burger_menu.classList.remove('nav_toggle_hidde2');
    burger_menu.classList.add("nav_toggle");
    burger_menu.setAttribute("onclick","showMobMenu('');");

    const blockMenu = document.querySelector('.nav_mobmenu');
    fadeOut(blockMenu, 1);
}

function getCssProperty(element, property){
    let elem = document.querySelector(element);
    return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function fadeIn(el, speed) {
    let step = 5 / speed;
    let interval = setInterval(function() {
        let left_val = parseInt(getCssProperty('.nav_mobmenu', 'left'));
        if (left_val == 0){
            clearInterval(interval);
        }
        el.style.left = left_val + step + 'px';
    }, speed / 10);
}

function fadeOut(el, speed) {
    let step = 5 / speed;
    let interval = setInterval(function() {
        let width_val = parseInt(getCssProperty('.nav_mobmenu', 'width'));
        let left_val = parseInt(getCssProperty('.nav_mobmenu', 'left'));
        if (left_val < -width_val){
            clearInterval(interval);
        }
        el.style.left = left_val - step + 'px';
    }, speed / 10);
}

