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
    makeImages(users.results);
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
