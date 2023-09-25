const Movie = require("../Model/modelMovie")

const GetMovie = async(req,res) =>{
    try {
        const data = await Movie.find()
        res.status(200).send({
            success:true ,
            message:"All Product see Successfully",
            data
        })

    } catch (error) {
        res.status(error).send({
            success:true ,
            message:"user Not Found"
        })
    }
}



const CreateMovies = async(req,res) =>{
    try {
        const data = await Movie.create(req.body)
        res.status(200).send({
            success:true ,
            message:"All Product Create Successfully",
            data
        })
        
    } catch (error) {
        res.status(error).send({
            success:true ,
            message:"user Not Found"
        })
    }
}


const ReadMovie = async(req,res) =>{
    try {
        const id = req.params.id
        const data = await Movie.findById(id)
        res.status(200).send({
            success:true ,
            message:"Read Succssfully",
            data
        })

    } catch (error) {
        res.status(error).send({
            success:true ,
            message:"user Not Found"
        })
    }
}












const UpdateMovie = async(req,res) =>{
    try {
        const id = req.params.id
        const product = req.body 
        const data = await Movie.findByIdAndUpdate(id, product , {new:true})
        res.status(200).send({
            success:true ,
            message:"All Product Create Successfully",
            data
        })
    } catch (error) {
        res.status(error).send({
            success:true ,
            message:"user Not Found"
        })
    }
}

const DeleteMovie = async(req,res) =>{
    try {
        const id = req.params.id
        const data = await Movie.findByIdAndDelete(id)
        res.status(200).send({
            success:true ,
            message:"All Product Create Successfully",
            data
        })
    } catch (error) {
        res.status(error).send({
            success:true ,
            message:"user Not Found"
        })
    }
}


module.exports = {GetMovie, CreateMovies, ReadMovie,UpdateMovie,DeleteMovie}