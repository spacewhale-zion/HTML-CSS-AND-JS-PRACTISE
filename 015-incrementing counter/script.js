const counters = document.querySelectorAll('.counter');

document.addEventListener('DOMContentLoaded',()=>{
  counters.forEach((counter)=>{
   counter.innerText='0';
   let target = +counter.dataset.target;

   const updateCounter=()=>{

    let current= +counter.innerText;
    let increment=target/200;

    if (current<target){
      counter.innerText=`${Math.ceil(current+increment)}`;
      setTimeout(updateCounter,10);
    }
    else{
      counter.innerText=target;
    }
    

   }
   
   updateCounter();
  })

})