import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import dotenv from 'dotenv'
import { createInterface } from 'readline'

dotenv.config()

const api = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.OPENAI_ACCESS_TOKEN
})

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = msg => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        });
    });
}

var userRes = ''
console.log('Ola! Como eu posso te ajudar hoje? \n')
while (true) {
    userRes = await readLineAsync('> ');
    // readline.close();

    var botRes = await api.sendMessage(userRes)
    console.log(botRes.text)
}


