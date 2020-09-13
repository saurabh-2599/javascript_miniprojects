const reviews=[

{
id:1,
name:"Susan",
job:"ui/ux designer",
img:"./images/person-2.jpg",
text:"Hi, i am Susan.I am aui/ux designer in xyz company and i have wonderful experience with you guys"

},
{
id:2,
name:"Mark doe",
job:"content-writer",
img:"./images/person-3.jpg",
text:"Hi, i am Mark doe working as a content writer in xyz company and i have wonderful experience with you guys"
},
{id:3,
 name:"luis wilton",
 job:"front-end developer",
 img:"./images/person-4.jpg",
 text:"Hi, i am luis wilton working as a front end eveloper in xyz company and i have wonderful experience with you guys"

}


];
//selecting elements
/*const image=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const surprise=document.querySelector('.random-btn');
*/
//using destructuring
const [image,author,job,info,prevBtn,nextBtn,surprise]=[document.getElementById('person-img'),
document.getElementById('author'),
document.getElementById('job'),
document.getElementById('info'),
document.querySelector('.prev-btn'),
document.querySelector('.next-btn'),
document.querySelector('.random-btn')

];

//set starting item
let currentItem=0;
let content=person =>{
    const item=reviews[person];
    image.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
};
//load initial item when our app starts
window.addEventListener('DOMContentLoaded',() =>{
    content(currentItem);
});
nextBtn.addEventListener('click',() =>{
  
  currentItem++;
  if(currentItem>reviews.length-1){
      //display first element
      currentItem=0;
  }
  content(currentItem);
});
prevBtn.addEventListener('click',() =>{

    currentItem--;
    if(currentItem<0){
        //display last element
        currentItem=reviews.length-1;
    }
    content(currentItem);
});
surprise.addEventListener('click',() =>{
    const random=Math.floor(Math.random()*reviews.length);
    content(random);
});