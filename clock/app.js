
alert('clock is working');
setInterval(() => {
   let date=new Date();
    let hourTime=date.getHours();
    let minuteTime=date.getMinutes();
    let secondTime=date.getSeconds();
    let hourRotation=30*hourTime+minuteTime/2;
    let minuteRotation=6*minuteTime;
    let secondRotation=6*secondTime;
  document.getElementById('hour-hand').style.transform=`rotate(${hourRotation}deg)`;
 document.getElementById('minute-hand').style.transform=`rotate(${minuteRotation}deg)`;
  document.getElementById('second-hand').style.transform=`rotate(${secondRotation}deg)`;

},1000);
