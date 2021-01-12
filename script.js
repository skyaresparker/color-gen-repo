const colorInput = document.querySelector('input#color');
const h1 = document.querySelector('h1#colorGen');

colorInput.addEventListener('input', function(e){
    const color = colorInput.value;
    h1.innerText = color;
    document.body.style.backgroundColor = color;
    if(color === '#ffffff'){
        h1.style.color = '#000';
    } else if(color === "#000000"){
        h1.style.color = '#fff';
    } 
});

