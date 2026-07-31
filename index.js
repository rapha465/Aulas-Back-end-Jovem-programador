import express from 'express' // TYPE MODULE
// const express = require("express") // Type common js

// inicialzando o express - new
const app =express()

app.get("/api/somar", (req, res) => {
    // const exemplo ="batata"
    // let exemploAlterar= 0 
    // exemploAlterar= "batata"
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({message: num1 + num2 })
})

app.listen(3000, () =>{
    console.log("Servidor na porta 3000")
})
