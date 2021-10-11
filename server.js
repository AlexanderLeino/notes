const express = require('express');
const fs = require('fs')
const uuid = require('uuid')
const path = require('path')


const app = express()
const PORT = 3001

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

// The following HTML routes should be created:

// * `GET /notes` should return the `notes.html` file.
app.get('/notes', (req,res) => {
    
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})
        
// * `GET *` should return the `index.html` file.
app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname, '/public/index.html'))

})
// The following API routes should be created:

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req,res) => {
    fs.readFile('db/db.json')
    res.json('/db/db.json')
})
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) => {

})












app.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}`)
})