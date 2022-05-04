//*VARIABLES
let themeToggle = document.querySelector('.theme-toggle');


//*Theme toggle
themeToggle.addEventListener('click',e=>{
  document.body.classList.toggle('dark-theme')
  console.log('done');
})