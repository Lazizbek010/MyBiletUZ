// ResNAv
const resNav = document.querySelector('.resNav')
const bars = document.querySelector('.bars')

bars.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
      bars.classList.toggle('active')
})