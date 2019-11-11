const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
  let info = request.body
  info.id = Math.random().toString(36).substr(-8)
  //Adiciona um id em uma fórmula randômica através do método post.
  model.agenda.contatos.push(info)
  response.status(200).send()
};

function validarDataNascimento() {
  let arrayDataNascimento = request.dataNascimento()
  arrayDataNascimento.forEach(dataNascimento => {
    if () {

    }
  })
};

module.exports = {
  getAll,
  add
}

