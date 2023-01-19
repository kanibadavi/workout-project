const key = "S5VeJeskwaa_zsQ8kCfXMJ_ss0x_BXhlj-z99tkA40E";
const links = [
  "What Is Productivity Guilt, and How Can You Overcome It?",
  "This 20-Minute Lower-Body Workout Builds Muscle With No Equipment",
  "How to Do a Burpee for Total-Body Strength — Plus How to Modify It for Any Ability",
  "Your Stay-Healthy Toolkit",
  "How Bad Is It Really to Never Clean Your Workout Equipment?",
  "A 10-Minute Seated Core Workout for People With Back Pain",
  "our challenges",
  "20-Minute Workouts",
  "Can't Do a Chaturanga? Here's What Your Body's Trying to Tell You",
];

let url = `https://api.unsplash.com/search/photos?query=workout&client_id=${key}&orientation=landscape&page=3&per_page=9`;
async function data(url) {
  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    makeImages(users.results);
  } catch (err) {
    console.log(err);
  }
}
data(url);

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function makeImages(data2) {
  console.log(data2);
  const main = document.querySelector("main");
  const container = document.createElement("article");
  container.classList.add("container2");
  main.append(container);
  data2.forEach((users, index) => {

    const image3 = document.createElement("img");
    image3.src = users.urls.small;
    const link = document.createElement("a");
    const div = document.createElement("div");
    div.classList.add("div");
    link.href = "#";
    link.textContent = links[index];
    div.append(image3, link);
    container.append(div);
    image3.classList.add("image3");
  });
}

const input= document.querySelector("input")
input.addEventListener("input", (e)=>{
 
  const elements = document.querySelectorAll(".wrapper")
  console.log(elements);
  const search = e.target.value
  console.log(search);
  for(let el of elements){
    // console.log(el);
    if(el.getAttribute("data-name").toLowerCase().includes(search.toLowerCase())){
      el.style.display = "inline-block"
    }else {
      el.style.display = "none"
    }
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}