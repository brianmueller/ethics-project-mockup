document.querySelector('#start').addEventListener('click',function(){
    document.querySelector('#welcome').style.display = 'none';
    document.querySelector('#app').style.display = 'block';
});

document.querySelector('#finish').addEventListener('click',function(){
    document.querySelector('#app').style.display = 'none';
    document.querySelector('#summary').style.display = 'block';
});