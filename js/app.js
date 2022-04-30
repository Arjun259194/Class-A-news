//*VARIABLES
const newsFeed = document.querySelector('.news-feed');
const apiKey = 'a481486cec3745ddae53821bb5132799'
const url = 'https://newsapi.org/v2/top-headlines?'
let html = ``

//*FUNCTIONS
function appendDataToNewsFeed(data) {
  for (const element of data) {
    html += `<article>
              <img src="${element.urlToImage}" alt="" />
              <div class="left">
                <h1>${element.title}</h1>
                <p>${element.content}</p>
                <div>
                  <span class="muted-text">Author:${element.author}</span>
                  <span class="muted-text">${element.publishedAt}</span>
                  <a href="${element.url}" target="blank"><button class="primary-btn">More</button></a>
                  <span class="news-source muted-text">${element.source.name}</span>
                </div>
              </div>
            </article>`
  }
  newsFeed.innerHTML = html
}

async function defaultNewsLoad() {
  await fetch(`${url}country=us&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(parsedResponse => {

      let articles = parsedResponse['articles']

      appendDataToNewsFeed(articles)

    })
    .catch(err => console.log(err))
}

async function keywordNewsSearch() { }
async function countryNewsSearch() { }

//*CALLING FUNCTIONS

defaultNewsLoad();
