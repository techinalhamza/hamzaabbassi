let nav = document.querySelector('.nav')
document.getElementById('opensidebar').onclick = () => {
    nav.classList.toggle('active') 
}

// let nav = document.querySelector('.nav')
// document.getElementById('opensidebar').onclick = () => {
//     nav.classList.toggle('active');
// }

const text = document.querySelector('.text');
const textLoad = () =>{
    setTimeout(()=>{
        text.textContent= "web developer";
    },0);
    setTimeout(()=>{
        text.textContent= "freelawncer";
    },4000);
    setTimeout(()=>{
        text.textContent= "blooger";
    },8000);
    setTimeout(()=>{
        text.textContent= "youtuber";
    },12000);
}
textLoad();
setInterval(textLoad, 16000);
