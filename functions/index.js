const functions = require('firebase-functions');
const Telegraf = require('telegraf')
const apixu = require('apixu')

const apixuClient = new apixu.Apixu({
    apikey: 'dc88bb1b8d759c42d28fe4c80a555c98'
})

const axios = require('axios');
const params = {
    access_key: 'dc88bb1b8d759c42d28fe4c80a555c98',
    query: 'New York'
}

const bot = new Telegraf('1052944422:AAFVTzQwaUvnXSRC_DzmWLcv1LcbQVZbwYM')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('text', (ctx) => {
    let query = ctx.update.message.text;
    params.query = query
    axios.get('http://api.weatherstack.com/current', { params })
        .then(response => {
            const apiResponse = response.data;
            return ctx.reply('temperature ' + apiResponse.current.temperature)
                // res.send(apiResponse)
                // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        }).catch(error => {
            // console.log(error);
            return ctx.reply('doesnt exist')
        });
})
bot.on('text', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
    // // Create and Deploy Your First Cloud Functions
    // // https://firebase.google.com/docs/functions/write-firebase-functions
    //
exports.helloWorld = functions.https.onRequest((request, res) => {
    response.send("Hello from Firebase!");
    // axios.get('http://api.weatherstack.com/current', { params })
    //     .then(response => {
    //         const apiResponse = response.data;
    //         return res.send(apiResponse)
    //             // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    //     }).catch(error => {
    //         // console.log(error);
    //         return res.send(error)
    //     });
});