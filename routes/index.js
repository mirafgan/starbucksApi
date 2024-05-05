const { Router } = require("express");
const { menu: { children: [{ children: data }] } } = require("../static/data.json");
const { fetchData } = require("../utils");
const routes = Router()
routes.get("/", (req, res) => {
    res.send(data)
})
routes.post("/product", async (req, res) => {
    const { seoId } = req.body;
    const data = await fetchData(`https://api.sbux.retter.io/3e898s82a/CALL/ProductManager/getProduct/default?country=azerbaijan&seoId=${seoId}&__culture=az-AZ&__platform=az-AZ`)
    res.send({
        name: data.name,
        image: data.imageLocation,
        description: data.description
    })
})
module.exports = routes