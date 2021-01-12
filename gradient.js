const input = document.querySelectorAll('input');
const h2 = document.querySelectorAll('h2');

for(let i = 0; i < 2; i++){
    input[i].addEventListener('input', function(e) {
        h2[i].innerText = input[i].value;
        document.body.style.backgroundImage = `linear-gradient(${input[0].value}, ${input[1].value})`;
        if(input[i].value === '#000000'){
            h2[i].style.color = '#fff';
        } else if(input[i].value === '#ffffff'){
            h2[i].style.color = '#000';
        }
    })
}