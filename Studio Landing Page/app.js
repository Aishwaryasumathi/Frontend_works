const wrapper = document.querySelector(".circle-layout");

// 7 image paths
const imageSources = [
  "Images/Person2.svg",
  "Images/Person8.svg",
  "Images/Person7.svg",
  "Images/Person3.svg",
  "Images/person5.svg",
  "Images/Person1.svg",
  "Images/Person4.svg",
];

const total = imageSources.length;
const centerX = 348 / 2;
const centerY = 355 / 2;
const radius = 125;

imageSources.forEach((src, i) => {
  const angle = ((2 * Math.PI) / total) * i;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  const img = document.createElement("img");
  img.src = src;
  img.className = "outer";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  wrapper.appendChild(img);
});

const feedback = [
  {
    img: "images/client1.webp",
    ClientName: "Naveen Babu",
    Feedback:
      "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
  },
  {
    img: "images/client2.jpg",
    ClientName: "Sarah Thomas",
    Feedback:
      "The team delivered exactly what we needed. The UI was sleek, the functionality spot on, and everything was done ahead of schedule. A fantastic experience overall.",
  },
  {
    img: "images/client3.jpg",
    ClientName: "Ravi Menon",
    Feedback:
      "Working with this agency was effortless. They understood our brand from day one and brought our vision to life better than we imagined. Highly reliable and creative.",
  },
  {
    img: "images/client4.jpg",
    ClientName: "Susmitha Sen",
    Feedback:
      "Top-notch professionalism from start to finish. Communication was clear, deadlines were met, and the final product exceeded expectations. Will definitely return for future projects",
  },
  {
    img: "images/client5.jpg",
    ClientName: "Nikitha Joshi",
    Feedback:
      "We’ve collaborated with many agencies, but this team stands out for their creativity and technical expertise. They’re now our go-to for all digital needs.",
  },
];

const imgEl = document.querySelector(".client-img");
const nameEl = document.querySelector(".client-name");
const textEl = document.querySelector(".client-text");
const dotContainer = document.querySelector(".dots-container");

// Generate dots based on feedback length
feedback.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.onclick = () => showSlide(index);
  dotContainer.appendChild(dot);
});

let currentIndex = 0;
showSlide(currentIndex);

// Show the feedback at given index
function showSlide(index) {
  const { img, ClientName, Feedback: message } = feedback[index];
  imgEl.src = img;
  nameEl.textContent = ClientName;
  textEl.textContent = message;

  // Update active dot
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");

  currentIndex = index;
}
