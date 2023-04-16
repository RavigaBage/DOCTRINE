let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


let toolKit = document.querySelector('#toolmain');
toolKit.addEventListener('click', function(e){
    if(toolKit.classList.contains('fa-times')){
        toolKit.classList.remove('fa-times');
        toolKit.classList.add('fa-tools')
    }else{
        toolKit.classList.add('fa-times');
        toolKit.classList.remove('fa-tools')
    }
var tooltrigger = document.querySelector('.tools');
tooltrigger.classList.toggle('active');
})