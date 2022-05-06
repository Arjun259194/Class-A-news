//*VARIABLES
const searchKeyword = document.querySelector('#keyWordInput');
const countryName = document.querySelector('#country');
const newsFeed = document.querySelector('.news-feed');
const apiKey = 'a481486cec3745ddae53821bb5132799'
const url = 'https://newsapi.org/v2/top-headlines?'
let html = ``

//*FUNCTIONS
function appendDataToNewsFeed(data) {  
  html = ''
  for (const key in data) {    
    html += `<article>
              <img src="${data[key].urlToImage}" alt="article image" />
              <div class="left">
                <h1>${data[key].title}</h1>
                <p>${data[key].content == null ? 'oops! You have to visit the source website' : data[key].content}</p>
                <div>
                  <span class="muted-text">Author:${data[key].author}</span>
                  <span class="muted-text">${data[key].publishedAt}</span>
                  <a href="${data[key].url}" target="blank"><button class="primary-btn">More</button></a>
                  <span class="news-source muted-text">${data[key].source.name}</span>
                </div>
              </div>
            </article>`
  }
  newsFeed.innerHTML = html
}

function filterArticle(keyword, obj) {
  keyword = keyword.toLowerCase();
  const asArray = Object.entries(obj);
  const filtered = asArray.filter(([key, value]) => value.title.toLowerCase().includes(keyword));

  return Object.fromEntries(filtered);
}

async function defaultNewsLoad() {
  await fetch(`${url}country=us&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
      let articles = parsedResponse['articles']
      appendDataToNewsFeed(articles)
    })
    .catch(err => alert(err));
}

async function keywordNewsSearch() {
  let url = 'https://newsapi.org/v2/everything?'
  let keyword = searchKeyword.value;
  let sortBy = 'popularity'

  await fetch(`${url}q=${keyword}&sortBy=${sortBy}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(json => {
      let articles = json['articles']
      let filteredArticles = filterArticle(keyword, articles);
      appendDataToNewsFeed(filteredArticles);
    })
    .catch(err => alert(err));
}

async function countryNewsSearch() {
  let country = countryName.value
  await fetch(`${url}country=${country}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
      let articles = parsedResponse['articles']
      appendDataToNewsFeed(articles)
    })
    .catch(err => alert(err))
}

//*CALLING FUNCTIONS

defaultNewsLoad();
