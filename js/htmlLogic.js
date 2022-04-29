console.log('connected');

let chCountry = document.querySelector('#ch-country');
let chKeyword = document.querySelector('#ch-keyword');
let keywordSearch = document.querySelector('.keywordSearch');
let countrySearch = document.querySelector('.countrySearch');

// keywordSearch.style.display = "none";
// countrySearch.style.display = "none";


chCountry.addEventListener('click',(e)=>{
  keywordSearch.style.display = "none";
  countrySearch.style.display = "block";
})

chKeyword.addEventListener('click',(e)=>{
  keywordSearch.style.display = "block";
  countrySearch.style.display = "none";
})