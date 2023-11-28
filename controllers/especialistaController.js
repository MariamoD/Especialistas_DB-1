const db = require('../models')

//create main Model
const Especialista = db.especialista


//main work

//1. Criar especialista

const addEspecialista = async (req, res) => {
   
    let info = {
        nome: req.body.nome,
        tipo: req.body.tipo,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        especialidade: req.body.especialidade,
        formacao: req.body.formacao,
        experiencia: req.body.experiencia,
        email: req.body.email,
        telefone: req.body.telefone
    }

    const especialista = await Especialista.create(info)
    res.status(200).send(especialista)
    console.log(especialista)
}

// 2. Listar todos especialistas

const getAllEspecialistas = async (req, res) => {
    let especialistas = await Especialista.findAll ({})
    res.status(200).send(especialistas)
    const { nome } = request.query;
    const results = nome ? users.filter(user => user.name.includes(nome)) : users;
    return response.json(results);
}

// 3. Busca de especialista 
// Pelo Id
const getOneEspecialista = async (req, res) => {
    let id = req.params.id
    let especialista = await Especialista.findOne ({where: {id:id}})
    res.status(200).send(especialista)
}

// const getEspecialista = async (req, res) => {
//     let nome = req.params.nome
//     let especialista = await Especialista.findAll ({where: {nome:nome}})
//     res.status(200).send(especialista)
// }



// 4. update especialista

const updateEspecialista = async (req, res) => {
    let id = req.params.id
    const especialista = await Especialista.update(req.body, {where: {id:id}})
    res.status(200).send(especialista)
}

// 5. deletar especialista pelo id

const deleteEspecialista = async (req, res) => {
    let id = req.params.id
    await Especialista.destroy({where: {id: id}} )
    res.status(200).send('especialista eliminado')
}


module.exports ={
    addEspecialista,
    getAllEspecialistas,
    getOneEspecialista,
    updateEspecialista,
    deleteEspecialista,
    // getEspecialista
}
