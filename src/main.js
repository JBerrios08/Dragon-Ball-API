import filtrarPersonajes from "./filterInfo.js";

const URL = "https://api.allorigins.win/get?url=https://dragon-ball-super-api.herokuapp.com/api/characters";

async function getInfo() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    const characters = JSON.parse(data.contents);
    filtrarPersonajes(characters);
  } catch (error) {
    console.error('Error:', error);
  }
}

getInfo();
