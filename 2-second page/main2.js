const key = "S5VeJeskwaa_zsQ8kCfXMJ_ss0x_BXhlj-z99tkA40E";

const links = [
  "15 Foods That Help With Bloating",
  "The One Breakfast Brain Experts Want You to Eat More Often",
  "15 Surprising Foods With Added Sugar",
  "How Bad Is It Really to Eat Farm-Raised Salmon?",
  "How to Make a Mug Omelet for a Quick High-Protein Breakfast",
  "15 Ways to Get More Protein at Breakfast, Lunch and Dinner",
  "What Really Happens to Your Body When You Drink Bulletproof Coffee",
  "15 High-Protein Vegetarian Soups That Serve Comfort",
  "Want to Age Well? Add This Anti-Inflammatory Spice to Your Daily Diet"
]

let url = `https://api.unsplash.com/search/photos?query=diet&client_id=${key}&orientation=landscape&page=3&per_page=9`;

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
