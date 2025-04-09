const txtarea = document.querySelector('textarea');
const tagsElements = document.querySelector('.tags');


const createTags = (input) => {
const tags=input.split(',').
                      filter((tag)=>tag.trim()!="").
                      map((tag)=>tag.trim());

tagsElements.innerHTML = "";

tags.map((tag)=>{
  const tagElement = document.createElement('span');
  tagElement.classList.add('spanele');
  tagElement.innerText=tag;
  tagsElements.appendChild(tagElement);
})
}

txtarea.addEventListener('keyup',(e)=>{
  const inputs=e.target.value;
  createTags(inputs);
  if (e.key==="Enter"){
    setTimeout(()=>{
      e.target.value="";
    },10)
    randomPick();
  }
})


const pickRandomTag = () => {
  let tags=document.querySelectorAll('.spanele');
  return tags[Math.floor(Math.random()*tags.length)];
}
const highlight=(tag)=>{
  tag.classList.add('highlight');
}
const unHighlightTag=(tag)=>{
  tag.classList.remove('highlight');
}

const randomPick=()=>{
  const times=30;
  const interval=setInterval(()=>{
    const randomTag=pickRandomTag();
    highlight(randomTag);
    setTimeout(()=>{
      unHighlightTag(randomTag);
    },100)
  },100)

  setTimeout(()=>{
    clearInterval(interval);
    setTimeout(()=>{
      const randomTag=pickRandomTag();
      highlight(randomTag);
    },100)
  },times*100)

}

