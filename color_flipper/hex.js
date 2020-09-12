

const btn=document.querySelector('#btn');
//hex color consist of  6 values followed by # can be 0-9 or A-F for eg:#f15025;
const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color=document.querySelector('.color');
//add event listeners
btn.addEventListener('click',function(){
    //generating random hex color
    
   let hexColor="#";
   // taking this at llet because after each iteration previous value will be added into it;
   for(let i=0;i<6;i++){
    //generate random number between 0 and length of hex array
    const randomNumber=Math.floor(Math.random()*hex.length);
    //adding previous value into it
    hexColor=hexColor+hex[randomNumber];
   }
   //displaying hexcolor arrived after running 6 iterations
   document.querySelector('body').style.background=hexColor;
   //displayinh hexcode of color displayed
   color.textContent=hexColor;
});
