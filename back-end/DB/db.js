const mongoose = require("mongoose")




const ConnectDB = async(req, res)=>{

    try {
        const result =   await mongoose.connect(process.env.CONNCETED)
        console.log("Mongoose Connected")

        
    } catch (error) {
        console.log(error)
    }

}

module.exports = ConnectDB