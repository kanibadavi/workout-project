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


const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';

}