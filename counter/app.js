let button=document.querySelector('.button-container');
const counter=document.querySelector('#value');
//select initial count
let count=0;
//adding event listeners
/*first and hard way by setting event for each buttons using foreach loops
let btns=document.querySelectorAll('.btn');
//converting into array
btns=Array.from(btns);
btns.forEach(function(item){
item.addEventListener('click',function(event){
    const styles=event.target.classList;
  if(styles.contains("decrease")){
      count--;
  }
  else if(styles.contains("reset")){
       count=0;

  }
  else if(styles.contains("increase")){
      count++;
     
  }
  counter.textContent=parseInt(count);
});
});
*/
//second way by using event delegation and event bubbling
button.addEventListener('click',function(event){
    const btn=event.target.classList;
    if(btn.contains("decrease")){
        count--;    
    }
    else if(btn.contains("reset")){
        count=0;
    }
    else if(btn.contains("increase")){
        count++;

    }
    counter.textContent=parseInt(count);
});