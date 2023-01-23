const key = "S5VeJeskwaa_zsQ8kCfXMJ_ss0x_BXhlj-z99tkA40E";

const links =[
  "The 7 Best Workout Journals to Track Your Progress",
  "How to Do a Burpee for Total-Body Strength — Plus How to Modify It for Any Ability",
  "Are You Overtraining or Is It a Mental Health Issue? Answering These 3 Questions Can Help You Tell the Difference",
  "This 20-Minute Lower-Body Workout Builds Muscle With No Equipment",
  "The 10-3-45 Dumbbell Workout Builds a Stronger Upper Body",
  "The Windshield Wiper Exercise Takes Your Ab Workouts to the Next Level",
  "Want to Age Well? Here's the One Surprising Thing You Should Do Every Day","This Yoga Pose Improves Posture and Relaxes Your Mind",  "The Only 5 Exercises Women Need to Get Lean"
]

let url = `https://api.unsplash.com/search/photos?query=fitness&client_id=${key}&orientation=landscape&page=4&per_page=9`;

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