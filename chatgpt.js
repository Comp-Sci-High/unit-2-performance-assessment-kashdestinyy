const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to the ChatGPT Chat bot!")

const model = prompt("What model would you like to use?")
const question = prompt("What do you need from Chatgpt?")

async function askChatGPT(){
    const urL = "https://api.openai.com/v1/responses";
    
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization: 'Bearer ' + apiKey,
        },body: JSON.stringify({model:model, input:question})
    }
    const response = await fetch(urL,options)
    const data = await response.json()

    const answer = data.output[0].content[0].text;
    console.log("ChatGPT says" + answer)
}

askChatGPT({
    model: model,
    input:question 
})

