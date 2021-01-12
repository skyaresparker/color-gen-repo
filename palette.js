const palDiv = document.querySelectorAll('div.pal');
const h4 = document.querySelectorAll('h4');
const palGen = document.querySelector('button');

for(let i = 0; i < 6; i++){
    
    palGen.addEventListener('click', function(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        h4[i].innerText = `rgb(${r}, ${g}, ${b})`;
        palDiv[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        if(r <= 150 || g <= 150 || b <= 150){
            h4[i].style.color = '#fff';
        } else h4[i].style.color = '#000';
    })
       
}

