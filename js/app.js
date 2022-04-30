//*VARIABLES

const newsFeed = document.querySelector('.news-feed');
let html = ``

const apiKey = 'a481486cec3745ddae53821bb5132799'
const url = 'https://newsapi.org/v2/top-headlines?'

//*FUNCTIONS

function appendDataToNewsFeed(data) {
  for (const element of data) {

    html += `<article>
                <img src="${element.urlToImage}" alt="News image not found" />
                <h1>${element.title}</h1>
                <p>${element.content}</p>
                <div>
                  <span class="muted-text">Author:${element.author}</span>
                  <span class="muted-text">${element.publishedAt}</span>
                  <a href="${element.url}" target="blank"><button class="primary-btn">More</button></a>
                  <span class="news-source muted-text">${element.source.name}</span>
                </div>
              </article>`
  }

  newsFeed.innerHTML = html
}

//*FETCHING DEFAULT NEWS

let fetchedData = fetch(`${url}country=us&apiKey=${apiKey}`)
  .then(response => response.json())
  .then(parsedResponse => {

    let articles = parsedResponse['articles']

    appendDataToNewsFeed(articles)

  })
  .catch(err => console.log(err))