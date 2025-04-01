
const btn=document.querySelector('.btn')

const input=document.querySelector('.input')

btn.addEventListener('click',()=>{

 input.classList.toggle('.active')
 btn.classList.toggle('.active')
  input.focus()
  console.log(input)
  
})
