    let openBtn=document.getElementById('openBtn');
    let closeBtn=document.getElementById('closeBtn');
    let menu=document.getElementById('menu');
    openBtn.addEventListener('click', ()=>{
        menu.style.display = 'flex';
        closeBtn.style.display = 'inline-block'
        openBtn.style.display = "none"
    });

    closeBtn.addEventListener('click', ()=>{
        menu.style.display = 'none';
        closeBtn.style.display = 'none'
        openBtn.style.display = "inline-block"
    })

let load = document.getElementById('load');
let body = document.getElementsByClassName('body');
window.onload = function() {
    load.style.display = "none";
};
