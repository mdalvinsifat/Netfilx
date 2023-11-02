const Product = require("../Model/model")


// get  
const GetRouter = async(req,res) =>{
    try {
        const Mydata = await Product.find()
        res.status(200).json({
            success:true,
            message:"user Get Successfully",
            Mydata
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"404 Error Not Found"
        })
    }
}



// Create 

const CreateRouter = async(req,res) =>{
    try {

        const Mydata = await Product.create(req.body)
        res.status(200).json({
            success:true,
            message:"user Get Successfully",
            Mydata
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"404 Error Not Found"
        })
    }
}


// Read  

const ReadRouter = async(req,res) =>{
    try {
        const id = req.params.id
        const Mydata = await Product.findById(id)
        res.status(200).json({
            success:true,
            message:"user Get Successfully",
            Mydata
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"404 Error Not Found"
        })
    }
}


// update 

const UpdateRouter = async(req,res) =>{
    try {
        const id = req.params.id
        const product = req.body
        const Mydata = await Product.findByIdAndUpdate(id , product ,{new:true})
        res.status(200).json({
            success:true,
            message:"user Get Successfully",
            Mydata
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"404 Error Not Found"
        })
    }
}

// Delete 


const DeleteRouter = async(req,res) =>{
    try {
        const id = req.params.id
        const Mydata = await Product.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"user Get Successfully",
            Mydata
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"404 Error Not Found"
        })
    }
}



// search 

const SearchController = async( req, res) =>{
    try {

        const {key} = req.params
        const result = await Product.find({
          $or:[
            {name:{$regex : key, $options:"i"}}
          ]
       
        })

        res.status(200).send({
            success:true,
            message:"Search Successfully",
            result
        })
        
    } catch (error) {
        res.status(404).send({
            success:false, 
            message:"search product is not defaind"
        })
    }
}

module.exports = {GetRouter,CreateRouter,ReadRouter,UpdateRouter,DeleteRouter,SearchController}