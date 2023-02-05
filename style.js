gsap.registerPlugin(Flip);
const links= document.querySelectorAll(".nav-item a");
const activeNav= document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click",() => {


    //turn navs blue
    gsap.to(links,{color:"#252525"});

    if(document.activeElement === link) {
    gsap.to(link,{color:"#366f8d"});    
    }
    
    //wanna move the the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state,  {
        duration: 1.25,
        absolute: true,
        ease: "elastic.out(1,0.5)",
     });
  });
  
});



/**** About Cards*****/

const cards = document.querySelectorAll('.card');

cards.forEach((card, index)=>{
    card.addEventListener('click',()=>{
        //get state
        const state= Flip.getState(cards);
        
        //add active class to the clicked one and add inactive to the others 
        const isCardActive = card.classList.contains('active');
        cards.forEach((otherCard,otherIdx)=>{
            otherCard.classList.remove('active');
            otherCard.classList.remove('is-inactive')
            if(!isCardActive && index !== otherIdx){
                otherCard.classList.add("is-inactive");
            }

        });
        if(!isCardActive) card.classList.add('active');

        Flip.from(state,{
            duration:0.5,
            ease:"exop.out",
            absolute:true,
        });
    });
});




const burger = document.querySelector('.burger');
const  navLinks = document.querySelector('.nav-links');
const linkss = document.querySelectorAll('.nav-links li');




burger.addEventListener('click',()=>{

  navLinks.classList.toggle('open')

  linkss.forEach(link =>{
link.classList.toggle("fade");
  });

  

});

/*******Ripple Effect**********/

const btn = document.querySelector(".btn");

// Listen for click event
btn.onclick = function (e) {

// Create span element
let ripple = document.createElement("span");

// Add ripple class to span
ripple.classList.add("ripple");
// Add span to the button
this.appendChild(ripple);

// Get position of X
let x = e.clientX - e.target.offsetLeft;

// Get position of Y
let y = e.clientY - e.target.offsetTop;

// Position the span element
ripple.style.left = `${x}px`;
ripple.style.top = `${y}px`;

// Remove span after 0.3s
setTimeout(() => {
	ripple.remove();
	}, 300);

};

/****** Message post***********/

const scriptURL = 'https://script.google.com/macros/s/AKfycbzDSq2B_xBkIY2W5MoytEf3BIzN72IKyOxEJjErXL09eBzHOfsE88Slws9ox-_jOxKO/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response =>{
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })


