const btn = document.getElementsByClassName('btn')[0];
const jokeDisplay = document.getElementById('joke');

const DisplayJoke=async()=>{

  try {
    const res = await fetch("https://icanhazdadjoke.com/",{
      headers:{
        'Accept': "application/json" // Request JSON response
      }
    })

    const data = await res.json();  // Convert response to JSON
    jokeDisplay.textContent = data.joke; // Display the joke
    console.log(data.joke); // Log the joke to the console
  } catch (error) {
    jokeDisplay.textContent = "Failed to fetch joke 😢";
    console.error(error);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  DisplayJoke();
})
btn.addEventListener('click', DisplayJoke)
