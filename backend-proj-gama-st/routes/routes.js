const express = require("express");
const router = express.Router();
const registerTemps = require("../models/cadastroModels");
const bcrypt = require("bcrypt");

router.post("/cadastro", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const usuarioCadastrado = new registerTemps({
    nomeCompleto: req.body.nomeCompleto,
    dataNascimento: req.body.dataNascimento,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    bairro: req.body.bairro,
    cidade: req.body.cidade,
    estado: req.body.estado,
    cep: req.body.cep,
    telefoneFixo: req.body.telefoneFixo,
    celular: req.body.celular,
    email: req.body.email,
    cargoPretendido: req.body.cargoPretendido,
    estadoCivil: req.body.estadoCivil,
    genero: req.body.genero,
    identidade: req.body.identidade,
    cpf: req.body.cpf,
    veiculo: req.body.veiculo,
    habilitacao: req.body.habilitacao,
    password: securePassword,
  });

  usuarioCadastrado
    .save()
    .then((data) => {
      res.status(202).send("Dados cadastrados com sucesso!");
      console.log(data);
    })
    .catch((err) => {
      res.status(404).send("CPF ou Email já cadastrados!");
      console.log(err);
    });
});

module.exports = router;
