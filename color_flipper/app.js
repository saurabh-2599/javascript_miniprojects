//creating an array for colors
const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.querySelector('#btn');
const color=document.querySelector('.color');
//event listeners
//on click of btn change colors
btn.addEventListener('click',function(){
//generate random number between 0  and 3
const random=Math.random()*colors.length;
const colorLabel=Math.floor(random);
document.querySelector('body').style.background=colors[colorLabel];
color.textContent=colors[colorLabel];
});