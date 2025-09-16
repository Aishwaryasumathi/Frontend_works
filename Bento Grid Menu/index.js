const ratingsArr = [
  {
    img: "./assets/CrispChickenKatsuBentoBox.jpg",
    title: "Japenese harmony",
    desc: "A tender mound of sticky rice forms the base of this comforting Japanese meal, topped with juicy grilled chicken and a bright cherry tomato like a hinomaru flag. Purple cabbage adds a splash of elegance, while broccoli brings balance and color. Every element is placed with omotenashi—thoughtful hospitality in every bite",
    ratings: 3.5,
  },
  {
    img: "./assets/DecorativeFood.jpg",
    title: "Healthy Decorative Food",
    desc: "A cute rice character with a smiling face made from seaweed. Surrounding it are vibrant broccoli, corn, a cherry tomato, and sliced sausages.",
    ratings: 4,
  },
  {
    img: "./assets//riceandchicken.jpg",
    title: "Sticky rice, soulful flavor",
    desc: "A tender mound of sticky rice forms the base of this comforting Japanese meal, topped with juicy grilled chicken and a bright cherry tomato like a hinomaru flag. Purple cabbage adds a splash of elegance, while broccoli brings balance and color. Every element is placed with omotenashi—thoughtful hospitality in every bite.",
    ratings: 5,
  },
];
const review = document.querySelector(".reviews");
const titleEL = document.querySelector(".title");
const descEL = document.querySelector(".desc");
const stars = document.querySelectorAll(".staricon");
const imgEl = document.querySelector(".ratingsImg");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function renderview(idx) {
  const Item = ratingsArr[idx];
  titleEL.textContent = Item.title;
  descEL.textContent = Item.desc;
  review.style.background = `
    linear-gradient(
      0deg,
      rgba(237, 209, 215, 0.29) 0%,
      rgba(237, 209, 215, 0.29) 100%
    ),
    url(${Item.img}) lightgray 20% / cover no-repeat
  `;
  // reset stars (make all empty first)
  stars.forEach((star) => {
    star.className = "fa-solid fa-star staricon";
  });

  // fill stars (full and half)
  stars.forEach((star, i) => {
    if (i < Math.floor(Item.ratings)) {
      star.className = "fa-solid fa-star stariconcolor"; // full star
    } else if (i === Math.floor(Item.ratings) && Item.ratings % 1 >= 0.5) {
      star.className = "fa-solid fa-star-half-stroke stariconcolor"; // half star
    }
  });
}

// next/prev
function showSlides(n) {
  slideIndex = (n + ratingsArr.length) % ratingsArr.length; // wrap around

  // start fade-out
  review.classList.add("fade-out");

  setTimeout(() => {
    renderview(slideIndex); // update content while hidden
    review.classList.remove("fade-out"); // fade back in
  }, 500); // same as CSS transition duration
}

// button events
prevBtn.addEventListener("click", () => plusSlides(-1));
nextBtn.addEventListener("click", () => plusSlides(1));

// hover effect for arrow images
document.querySelectorAll(".arr").forEach((btn) => {
  const img = btn.querySelector("img");
  const original = "./assets/ArrowNav.svg";
  const hover = "./assets/ArrowNav_active.svg";

  btn.addEventListener("mouseenter", () => (img.src = hover));
  btn.addEventListener("mouseleave", () => (img.src = original));
});

renderview(slideIndex);
