const express = require('express')
const { GetRouter, CreateRouter, ReadRouter, UpdateRouter, DeleteRouter, SearchController } = require('../Config/Config')

const router = express.Router()



router.get("/get", GetRouter)
router.post("/create", CreateRouter)
router.get("/read/:id", ReadRouter)
router.put("/update/:id", UpdateRouter)
router.delete("/delete/:id", DeleteRouter)
router.get('/search/:key' , SearchController)


module.exports = router