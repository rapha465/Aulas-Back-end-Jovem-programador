import express from "express"
import ControllerExercicio from '../controller/exercicio.js'

const router= express.Router()


router.get("/api/somar", ControllerExercicio.Somar)
router.post("/api/dividir", ControllerExercicio.Dividir )
router.get("/api/salario/:valor/:hora", ControllerExercicio.SalarioValorHora)
router.get("/api/:peso1/:peso2/:peso3/:peso4/:peso5", ControllerExercicio.Media)

router.get("/api/temperatura/:celsius", (req, res) => {
    const temperatura = (req.params.temperatura)
    const celsius = (req.params.celsius)
    const resultado = F = (9 * C + 160 / 5)

    res.send({ resultado })

})
router.post("/api/fahrenheit", (req, res) => {
    const fahrenheit = (req.body.fahrenheit)
    const resultado = F = (9 * C + 160) / 5

    res.send({ resultado })

})

// Exercício 5: Peça uma distância em milhas e converta para quilômetros. (Dica: 1 milha = 1.60934 km) (get)
router.get("/api/distancia/:distancia", (req, res) => {
    const distancia = Number(req.params.distancia)
    const resultado = distancia * 160934

    res.send({ resultado })
})

// Exercício 5: Peça uma distância em milhas e converta para quilômetros. (Dica: 1 milha = 1.60934 km) (post)
router.post("/api/quilometros", (req, res) => {
    const milhas = Number(req.body.milhas)
    const resultado = milhas * 1.60934

    res.send({ resultado })
})

// Exercício 6: Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos. (get)
router.get("/api/:segundos", (req, res) => {
    const horas = Math.floor(req.params.segundos / 3600)
    const resto = req.params.segundos % 3600
    const minutos = Math.floor(resto / 60)
    const segundos = resto % 60

    const horaTotal = (`O total é ${horas}, horas ${minutos} minutos e ${segundos} segundos`)

    res.send({ resultado })
})

// Exercício 6: Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos. (post)
router.post("/api/segundos", (req, res) => {
    const Totalsegundos = Number(req.body.Totalsegundos)
})

//Exercício 7: Peça uma distância em quilômetros e converta para metros e centímetros(get)
router.get("/api/converta/distancia/:numero", (req, res) => {
    const distancia = Number(req.params.number);


})

export default router