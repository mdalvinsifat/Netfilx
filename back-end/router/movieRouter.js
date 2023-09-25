
const express = require("express")
const movie = express.Router()
const { GetMovie, CreateMovies, ReadMovie, UpdateMovie, DeleteMovie } = require('../Config/MovieConfig')




movie.get("/getmovie", GetMovie)
movie.post("/createmovie", CreateMovies)
movie.get("/readmovie/:id", ReadMovie)
movie.put("/updatemovie/:id", UpdateMovie)
movie.delete("/deletemovie/:id", DeleteMovie)



module.exports = movie