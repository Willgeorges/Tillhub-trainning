const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')

// init instance 
const french_song = express()

french_song.use(cors)

french_song.get('/v0/champs-elysee', (res) => {
    let result = 'Aux champs elysees'

    res.status(200).send(result)
})

const api = functions.https.onRequest(french_song)

module.exports = {
    api
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
