const key = "S5VeJeskwaa_zsQ8kCfXMJ_ss0x_BXhlj-z99tkA40E";
const searchParams = new URLSearchParams(window.location.search);
const searchQuery = searchParams.get('search');
console.log(searchQuery);
async function searchApi (){
    const response = await fetch (`https://dummyjson.com/posts/search?q=${searchQuery}`)
    const data = await response.json()
    console.log(data);
    searchImage(data.posts,data.posts.length)
}

async function searchImage (textData,length){
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${key}&orientation=landscape&page=3&per_page=${length}`)
    const data = await response.json()
    createPost(textData,data)
}

if (searchQuery) {searchApi()}

function createPost (textData,data) {
    
    const main = document.querySelector("main");
    const container = document.createElement("article");
    container.classList.add("container2");
    main.append(container);
    textData.forEach((linkText, index) => {
  
      const image3 = document.createElement("img");
      image3.src =data[index].urls.small;
      const link = document.createElement("a");
      const div = document.createElement("div");
      div.classList.add("div");
      link.href = "#";
      link.textContent = linkText.title;
      div.append(image3, link);
      container.append(div);
      image3.classList.add("image3");
    });
}