const express = require("express")
const { GetSeries, CreateSeries, ReadSeries, UpdateSeries, DeleteSeries } = require("../Config/SeriesConfig")

const product = express.Router()

product.get('/getseries', GetSeries)
product.post('/createseries', CreateSeries)
product.get('/readseries/:id', ReadSeries)
product.put("/updateSeries/:id", UpdateSeries)
product.delete('/deleteseries/:id', DeleteSeries)

module.exports = product