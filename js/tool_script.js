"use strict"
const user_profile = document.querySelector('#user_profile');
const user_profileList = document.querySelector('#user_profileList');
const  switch_toggle = document.querySelector('#switch_toggle');
const iframe = document.querySelector('.word');
const title = document.querySelector('.title');
const toggle_show = document.querySelector('.toggle_show');
const search = document.querySelector('.search');
const trigger_search = document.querySelector('#trigger_search');
const fa_times = document.querySelector('.fa-times');

function fileSelect(){
    const fileOpen = document.querySelector('#imageSelect');
    fileOpen.click();
}
function close_element(e){
    console.log('sd')
    let element_id = document.querySelector('.'+e.getAttribute('data_name'));
    element_id.classList.remove('active');
    element_id.classList.remove('show');  
}

user_profile.addEventListener('click', function(){
  user_profileList.classList.toggle('active');
})
switch_toggle.addEventListener('click', function(e){
    switch_toggle.classList.toggle('fa-toggle-on');
    iframe.classList.toggle('switch');
  })
title.addEventListener('click', function(e){
    title.classList.add('active');
})

iframe .addEventListener('click', function(e){
    title.classList.remove('active');
})
trigger_search.addEventListener('click', function(e){
    search.classList.toggle('show');
})

toggle_show .addEventListener('click', function(e){
    search.classList.toggle('active');
})


