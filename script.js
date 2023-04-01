let count=0;
const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
btns.forEach(
    function(btn){
        btn.addEventListener("click",
            function(e){
                const styles=e.currentTarget.classList;
                if(styles.contains('decrease')){
                    count--;
                }
                else if(styles.contains('increase')){
                    count++;
                }
                else{
                    count=0;
                }
                value.textContent=count;
                if(count>0){
                    value.style.color="green";
                }
                if(count<0){
                    value.style.color="red";
                }
                if(count===0){
                    value.style.color="#222";
                }
            }
       );
    }
);



// --------------------------------------------------------------------------------------

// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Spirited Away',
      job: 'Studio Ghibli',
      img: 'http://images2.fanpop.com/images/photos/4300000/Spirited-Away-spirited-away-4374648-852-480.jpg',
      text: "I feel like Spirited Away focuses on the love for family, love for friends, courage, maturing, and so many other great messages. There are also so many small details that you catch each time you watch it and they adds to the depth of the movie.",
    },
    {
      id: 2,
      name: 'Arrietty',
      job: 'Studio Ghibli',
      img: 'https://pm1.narvii.com/6142/a4ea520b15ab706dc52e64c56669e14401ab418b_hq.jpg',
      text: 'The Secret World of Arrietty is an imaginative, heartfelt story of how a family of mini-human survive the cruel intentions of human beings, with the help from one of their human "enemies". ',
    },
    {
      id: 3,
      name: 'whisper of the heart',
      job: 'Studio Ghibli',
      img: 'https://i.ytimg.com/vi/Swah4iHyJ0Q/maxresdefault.jpg',
      text:'In the case of Whisper of the Heart, it’s not a specific place that Shizuku longs for, it’s a specific feeling. Shizuku’s translation is about finding courage and belonging, following a personal destiny, even in the face of failure, rejection, and growing up. In that way, it speaks strongly to the emotional core of “Country Roads"',
    },
     
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });



//   nav toggle

const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");
navToggle.addEventListener("click",function(){
    links.classList.toggle(".show-links");
});