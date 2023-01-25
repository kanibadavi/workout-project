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

let url = `https://api.unsplash.com/search/photos?query=fitness&client_id=${key}&orientation=landscape&page=3&per_page=9`;
async function data(url) {
  try {
    const response = await fetch(url);
    const users = await response.json();
   
    makeImages(links,users.results);
  } catch (err) {
    
  }
}
data(url);

function makeImages(data2) {
 
  const main = document.querySelector("main");
  const container = document.createElement("article");
  container.classList.add("container2");
  main.append(container);
  links.forEach((linkText, index) => {

    const image3 = document.createElement("img");
    image3.src =data2[index].urls.small;
    const link = document.createElement("a");
    const div = document.createElement("div");
    div.classList.add("div");
    link.href = "#";
    link.textContent = linkText;
    div.append(image3, link);
    container.append(div);
    image3.classList.add("image3");
  });
}
<<<<<<< HEAD:3-third page/main3.js

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
=======
>>>>>>> 6648176f6d0d75588e861a068fcb0eb56a8949cc:main3.js
