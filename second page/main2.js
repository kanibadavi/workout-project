let url = "https://www.tredict.com/api/oauth/v2/activityList";
async function data(url) {
  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    makeImages(users.results)
  } catch (err) {
    console.log(err);
  }
};
data(url);