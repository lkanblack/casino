let overlay = document.querySelector('.overlay');
let popup = document.querySelector('.cookies');
let accept_btn = document.querySelector('.accept');
let cookies_btn = document.querySelector('.cookies-btn');
// let reject_btn = document.querySelector('.reject');

accept_btn.addEventListener('click', function(){
    overlay.style.display = "none";
    popup.style.display = "none";
});

cookies_btn.addEventListener('click', function(){
    overlay.style.display = "none";
    popup.style.display = "none";
});