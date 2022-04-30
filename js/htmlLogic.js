// console.log('connected');

let chCountry = document.querySelector('#ch-country');
let chKeyword = document.querySelector('#ch-keyword');
let keywordSearch = document.querySelector('.keywordSearch');
let countrySearch = document.querySelector('.countrySearch');

// console.log(chCountry,chKeyword,keywordSearch,countrySearch);

countrySearch.style.display = "none";


chCountry.addEventListener('click',(e)=>{
  keywordSearch.style.display = "none";
  countrySearch.style.display = "flex";
})

chKeyword.addEventListener('click',(e)=>{
  keywordSearch.style.display = "flex";
  countrySearch.style.display = "none";
})