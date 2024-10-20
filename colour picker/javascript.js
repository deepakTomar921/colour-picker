let mybtn=document.getElementById("mybtn");
let mybtn2=document.getElementById("mybtn2");
let copyDiv = document.querySelector(".copycode")
let rgb1="#000";
let rgb2="#fff";

const hexValues = () =>{
    let myhexaValues='0123456789abcdef';
    let colors= "#";
    for (let i = 0; i < 6; i++) {
       colors= colors + myhexaValues[Math.floor(Math.random() *16)];
        
        
    }
    
   return colors;
}



const handlemybtn= () =>{
    rgb1 = hexValues();
   console.log(rgb1);
   mybtn.innerText =rgb1;

   document.body.style.backgroundImage= `linear-gradient(to right , ${rgb1}, ${rgb2})`;
   copyDiv.innerHTML =  `background-Image: linear-gradient(to right , ${rgb1}, ${rgb2})`;
   
    
}
const handlemybtn2= () =>{
     rgb2 = hexValues();
    console.log(rgb2);
    mybtn2.innerText =rgb2; 
   document.body.style.backgroundImage= `linear-gradient(to right , ${rgb1}, ${rgb2})`;
   copyDiv.innerHTML =  `background-Image: linear-gradient(to right , ${rgb1}, ${rgb2})`;
   
}

mybtn.addEventListener('click', handlemybtn);
mybtn2.addEventListener("click", handlemybtn2);
copyDiv.addEventListener("click",()=>{
   navigator.clipboard.writeText(copyDiv.innerText);
})