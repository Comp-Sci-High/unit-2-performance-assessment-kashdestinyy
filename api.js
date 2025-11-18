const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2



// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to the Drake Lyrics Chat Bot!")
console.log("Pick a Drake song from the list Below:")
console.log("Headlines","One Dance", "Laugh Now Cry Later","Marvin's Room")

const choice = prompt("Enter a Drake song of your choice: ")

console.log(`Fetching Lyrics for ${choice}`)

const url = `https://api.lyrics.ovh/v1/Drake/${choice}`

async function FetchLyrics() {
    const response = await fetch(url)
    const data = response.json
    console.log(data.lyrics)
    
}

FetchLyrics();

