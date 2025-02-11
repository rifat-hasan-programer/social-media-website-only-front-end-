//----------------  post section ----------// 
const main= document.querySelector(".main");
const netbook = document.querySelector(".Netbook");
const post= document.querySelector('.post');
let story = document.querySelector(".stories");
const postElement= document.querySelector(".post-element");
const cross= document.querySelector(".cross");


post.addEventListener("click",function ( ){
post.style.opacity="0.3";
story.style.opacity="0.3";
main.style.opacity="0.3";
postElement.style.opacity="1";
 
 
});

cross.addEventListener("click",function(){
    postElement.style.opacity="0";
    post.style.opacity="1";
    story.style.opacity="1";
    main.style.opacity="1";
});




//-------------------- story scrolling ---------------//



document.addEventListener("DOMContentLoaded", function () {
    const storiesContainer = document.querySelector(".stories");
    const prevBtn = document.getElementById("preBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Scroll amount
    let scrollAmount = 200; // এক ক্লিকে 200px স্ক্রল করবে

    nextBtn.addEventListener("click", () => {
        storiesContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        storiesContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Mouse drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    storiesContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        storiesContainer.classList.add("active");
        startX = e.pageX - storiesContainer.offsetLeft;
        scrollLeft = storiesContainer.scrollLeft;
    });

    storiesContainer.addEventListener("mouseleave", () => {
        isDown = false;
        storiesContainer.classList.remove("active");
    });

    storiesContainer.addEventListener("mouseup", () => {
        isDown = false;
        storiesContainer.classList.remove("active");
    });

    storiesContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - storiesContainer.offsetLeft;
        const walk = (x - startX) * 2;
        storiesContainer.scrollLeft = scrollLeft - walk;
    });
});


// liked 

const loveElements = document.querySelectorAll(".love");

loveElements.forEach(love => {
    love.addEventListener("click", function() {
        if (this.style.color === "red") {
            this.style.color = "";
        } else {
            this.style.color = "red";
        }
    });
});


// -------- hr style ---------//

const general = document.querySelector(".general");
primary.addEventListener("click",function(){
    general.classList.add(general-style);
});


// ------------ friend request section ------------// 

document.querySelectorAll('.accept').forEach(acceptButton => {
    acceptButton.addEventListener('click', () => {
      // btn-friend-request এলিমেন্ট সিলেক্ট করা
      let btnContainer = acceptButton.closest('.btn-friend-request');
  
      if (btnContainer) {
        // নতুন একটি span তৈরি করা
        let textElement = document.createElement('span');
        textElement.textContent = 'You have accepted';
  
        // পুরানো .btn-friend-request এলিমেন্ট সরিয়ে নতুন span বসানো
        btnContainer.replaceWith(textElement);
      }
    });
  });
  