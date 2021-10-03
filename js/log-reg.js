

let login_btn = document.querySelector('.login-btn');
let register_btn = document.querySelector('.register-btn');
let register_modal = document.querySelector('.register_modal');
let login_modal = document.querySelector('.login_modal');
let close = document.querySelector('.reg_close');
let login_close = document.querySelector('.login_close');
let next = document.querySelector('.next-btn');
let back = document.querySelector('.back-btn');
let first_step = document.querySelector('.first-step');
let second_step = document.querySelector('.second-step');
let regOverlay = document.querySelector('.overlay');
let modalRegBtn = document.querySelector('.register_modal-btn');
let modalLogBtn = document.querySelector('.register_btn-modal');


register_btn.addEventListener('click', function(){
    register_modal.style.display = "block";
    regOverlay.style.display = "block";
});
login_btn.addEventListener('click', function(){
    login_modal.style.display = "block";
    regOverlay.style.display = "block";

});

next.addEventListener('click', function(e){
    e.preventDefault();
    first_step.style.display = "none";
    second_step.style.display = "block";
});
back.addEventListener('click', function(e){
    e.preventDefault();
    first_step.style.display = "block";
    second_step.style.display = "none";
});
close.addEventListener('click', function(){
    register_modal.style.display = "none";
    regOverlay.style.display = "none";
});
login_close.addEventListener('click', function(){
    login_modal.style.display = "none";
    regOverlay.style.display = "none";

});

modalRegBtn.addEventListener('click', function(){
    register_modal.style.display = "block";
    login_modal.style.display = "none";
});
modalLogBtn.addEventListener('click', function(){
    login_modal.style.display = "block";
    register_modal.style.display = "none";
});