// closing the menu tab
const close = document.getElementById('close');

const eventHandler = _ => {
    document.getElementById('navbar').style.display = 'none';
}

close.addEventListener('click', eventHandler);

// opening the menu tab
const open = document.getElementById('menu')

const openMenu = _ => {
    document.getElementById('navbar').style.display = 'flex';
}

open.addEventListener('click', openMenu);

// Checking the box
const box = document.getElementById('box');

const checkBox = _ => {
    document.getElementById('box').style.background = '#ba4270';
    document.getElementById('tick').style.visibility = 'visible';
}

box.addEventListener('click', checkBox);

// Uncheck Box
const tick = document.getElementById('tick');

const uncheckBox = _ => {
    document.getElementById('box').style.background = '#b3c2d0';
    document.getElementById('tick').style.visibility = 'hidden';
}

tick.addEventListener('click', uncheckBox);