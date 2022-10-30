//////////////////////////////////// animation js ///////////////////////////////////////////
wow = new WOW({
  boxClass: "animate__animated", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
// 
let textLink = document.querySelector(".text-link");
let card = document.querySelectorAll(".card");
let now = document.querySelectorAll(".now");
let notification = document.querySelector("#notificationSpan");
let cardParent = document.querySelectorAll(".content");
let mode;

// mark all notification as read
textLink.addEventListener("click", function () {
  for (let i = 0; i < card.length; i++) {
    if (card[i].classList.contains("content")) {
      card[i].style.background = "transparent";
      now[i].style.display = "none";
      notification.style.display = "none";
    }
  }
});

for (let i = 0; i < card.length; i++) {
  if (card[i].classList.contains("content")) {
    now[i].classList.remove("none");
    notification.classList.add("text-span");
    notification.innerHTML = i + 1;
    mode = i;
  } else {
    now[i].classList.add("none");
  }
  card[i].addEventListener("click", function () {
    if (card[i].classList.contains("content")) {
      if (mode < 0) {
        notification.style.display = "none";
      } else {
        card[i].classList.remove("content");
          card[i].style.background = 'transparent'
          now[i].classList.add("none");
          mode--;
          notification.innerHTML = mode+1;
      }
    }
  });
}
console.log(mode);
