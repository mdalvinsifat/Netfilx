const Seires = require("../Model/Series")


const GetSeries = async(req,res) =>{
    try {
        const data = await Seires.find()
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



const CreateSeries = async(req,res) =>{
    try {
        const data = await Seires.create(req.body)
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







const ReadSeries = async(req,res) =>{
    try {
        const id = req.params.id
        const data = await Seires.findById(id)
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



const UpdateSeries = async(req,res) =>{
    try {
        const id = req.params.id
        const product = req.body 
        const data = await Seires.findByIdAndUpdate(id, product , {new:true})
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

const DeleteSeries= async(req,res) =>{
    try {
        const id = req.params.id
        const data = await Seires.findByIdAndDelete(id)
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





module.exports ={GetSeries, CreateSeries,ReadSeries, UpdateSeries, DeleteSeries}