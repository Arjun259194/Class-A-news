//*VARIABLES
let chCountry = document.querySelector('#ch-country');
let chKeyword = document.querySelector('#ch-keyword');
let keywordSearch = document.querySelector('.keywordSearch');
let countrySearch = document.querySelector('.countrySearch');
let themeToggle = document.querySelector('.theme-toggle');

//*DEFAULT SEARCH OPTION
countrySearch.style.display = "none";

//*EVENT LISTENER
chCountry.addEventListener('click', (e) => {
  keywordSearch.style.display = "none";
  countrySearch.style.display = "flex";
})

chKeyword.addEventListener('click', (e) => {
  keywordSearch.style.display = "flex";
  countrySearch.style.display = "none";
})

//*Theme toggle
themeToggle.addEventListener('click',e=>{
  document.body.classList.toggle('dark-theme')
})
