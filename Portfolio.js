let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')
menu.addEventListener('click', function(){
    menu.classList.toggle('fa.fa-times')
    header.classList.toggle('active')
})

let themeToggler = document.querySelector('.fa-bar-1');
themeToggler.addEventListener('click', function(){
    themeToggler.classList.toggle('fa-sun')
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active')
    }
    console.log(themeToggler)

})