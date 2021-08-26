const mongoose = require("mongoose");

const registerTemplate = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  logradouro: {
    type: String,
    required: true,
  },
  numero: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  telefoneFixo: {
    type: String,
    required: false,
  },
  celular: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cargoPretendido: {
    type: String,
    required: true,
  },
  estadoCivil: {
    type: String,
    required: false,
  },
  genero: {
    type: String,
    required: true,
  },
  identidade: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  veiculo: {
    type: String,
    required: false,
  },
  habilitacao: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('cadastro-candidatos', registerTemplate);