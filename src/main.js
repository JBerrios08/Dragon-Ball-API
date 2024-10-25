import filtrarPersonajes from "./filterInfo.js";

const URL = "https://cors-anywhere.herokuapp.com/https://dragon-ball-super-api.herokuapp.com/api/characters";

async function getInfo() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    filtrarPersonajes(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getInfo();
