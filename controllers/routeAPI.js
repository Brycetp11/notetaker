var express = require("express");
var path = require("path");
const routes = express.Router();
const {Note, deleteNote} = require('./../db/db');

routes.get('/api/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

routes.post('/api/notes', async (req, res)=>{
    try {
        const newReq = req.body
        const newNote = new Note(newReq.title, newReq.text)
        await newNote.addNote()
        res.send(newNote)
    } catch (err){
        throw err
    }
})

routes.delete('/api/notes/:id', async (req, res)=>{
    try {
        const id = req.params.id
        await deleteNote(id)
        res.send('Note deleted')
    } catch (err) {
        throw err
    }
})

module.exports= routes;