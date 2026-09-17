import ServiceExercicio from '../service/exercicio.js'

class ControllerExercicio {

    Operacoes(req, res) {
        res.send({ message: num1 + num2 })
    }

    Somar(req, res) {
       try {
          const num1 = (req.bodynum1)
        const num2 = (req.body.num2)
        const soma = ServiceExercicio.Somar(num1, num2)
        res.send({ soma })
       } catch (error) {
        res.send({message: error.message})
       }
    }

    Dividir(req, res){
         try {
          const num1 = req.body.num1
        const num2 = req.body.num2
         const dividir = ServiceExercicio.Dividir()
        res.send ({Dividir})
         }catch (error) {
        res.send ({message: error.message})
       }
         }
    
    SalarioValorHora(req, res) {
        try {
           const valorGanho = Number(req.params.valor)
        const horasTrabalhadas = Number(req.params.hora)
        const resultado = ServiceExercicio.SalarioValorHora()
        res.send ({SalarioValorHora})
        }catch (error) {
        res.send ({ message:error.message})
    }     
    }
    Media(req, res) {
        const mediaPeso1 = Number(req.params.peso1)
        const mediaPeso2 = Number(req.params.peso2)
        const mediaPeso3 = Number(req.params.peso3)
        const mediaPeso4 = Number(req.params.peso4)
        const mediaPeso5 = Number(req.params.peso5)

        const resultado = (mediaPeso1 + mediaPeso2 + mediaPeso3 + mediaPeso4 + mediaPeso5) / 5

        res.send({ resultado })
    }

}

export default new ControllerExercicio()