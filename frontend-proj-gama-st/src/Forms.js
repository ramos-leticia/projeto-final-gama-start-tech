import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Formulario.css";
import axios from "axios";

function Forms() {

  const candidates = async (candidate) => {
    await axios.post("http://localhost:4000/app/cadastro", form).then((res) => {
      console.log(res.candidate);
      alert("Dados cadastrados com sucesso");
    });
  };

  function onBlurCep(e) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
            ...form,
            logradouro: data.logradouro,
            cidade: data.localidade,
            bairro: data.bairro,
            estado: data.uf,            
         })        
      });
  }


  const [form, setForm] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    telefoneFixo: "",
    celular: "",
    email: "",
    cargoPretendido: "",
    estadoCivil: "",
    genero: "",
    identidade: "",
    cpf: "",
    veiculo: "",
    habilitacao: "",
    password: "",
  });

  return (
    <div className="container-form">
      <div className="form-area">
        <div className="form-title">
          <h2 id="h2">Cadastro</h2>
          <h3 id="h3">Dados pessoais</h3>
        </div>
        <form>
          <label>Nome completo*</label>
          <input onChange={(e) => {setForm({...form, nomeCompleto: e.target.value})}}
          value={form.nomeCompleto}
            name="name"
            type="text"
            className="form-control form-group"
            placeholder=""
          />
          <label>Data de nascimento*</label>
          <input onChange={(e) => {setForm({...form, dataNascimento: e.target.value})}}
            name="birth"
            type="text"
            className="form-control form-group"
            placeholder="ex: DD/MM/AAAA"
            value={form.dataNascimento}
          />
          <label>CEP*</label>
          <input onChange={(e) => {setForm({...form, cep: e.target.value})}}
            name="cep"
            type="text"
            className="form-control form-group"
            placeholder="Somente números. Ex: 00000000"
            onBlur={onBlurCep}
            value={form.cep}
          />
          <label>Logradouro*</label>
          <input onChange={(e) => {setForm({...form, logradouro: e.target.value})}}
            name="logradouro"
            type="text"
            className="form-control form-group"
            placeholder=" "
            value={form.logradouro}
          />
          <label>Numero*</label>
          <input onChange={(e) => {setForm({...form, numero: e.target.value})}}
            name="numero"
            type="text"
            className="form-control form-group"
            placeholder=" "
            value={form.numero}
          />
          <label>Bairro*</label>
          <input onChange={(e) => {setForm({...form, bairro: e.target.value})}}
            name="bairro"
            type="text"
            className="form-control form-group"
            placeholder=""
            value={form.bairro}
          />
          <label>Cidade*</label>
          <input onChange={(e) => {setForm({...form, cidade: e.target.value})}}
            name="cidade"
            type="text"
            className="form-control form-group"
            placeholder=""
            value={form.cidade}
          />
          <label>Estado</label>
          <input onChange={(e) => {setForm({...form, estado: e.target.value})}}
            name="uf"
            type="text"
            className="form-control form-group"
            placeholder=""
            value={form.estado}
          />
          <label>Telefone fixo</label>
          <input onChange={(e) => {setForm({...form, telefoneFixo: e.target.value})}}
            name="phone"
            type="text/phone"
            className="form-control form-group"
            placeholder=" ex: 21999999999"
            value={form.telefoneFixo}
          />
          <label>Celular*</label>
          <input onChange={(e) => {setForm({...form, celular: e.target.value})}}
            name="cel"
            type="text/phone"
            className="form-control form-group"
            placeholder="ex: 21999999999"
            value={form.celular}
          />
          <label>E-mail*</label>
          <input onChange={(e) => {setForm({...form, email: e.target.value})}}
            name="email"
            type="text/email"
            className="form-control form-group"
            placeholder="ex: seuemail@email.com.br"
            value={form.email}
          />
          <label>Profissão/Cargo pretendido*</label>
          <input onChange={(e) => {setForm({...form, cargoPretendido: e.target.value})}}
            name="job"
            type="text"
            className="form-control form-group"
            placeholder="Digite o cargo pretendido"
            value={form.cargoPretendido}
          />
          <label>Estado civil</label>
          <select className="form-select" id="estado-civil" name="civil" onChange={(e) => {setForm({...form, estadoCivil: e.target.value})}}
          value={form.estadoCivil}>
            <option value="selecione">Selecione</option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="outro">Outro</option>
          </select>

          <label>Como você se identifica</label>
          <select className="form-select" id="gender" name="gender" onChange={(e) => {setForm({...form, genero: e.target.value})}}
          value={form.genero}
          >
            <option value="selecione">Selecione</option>
            <option value="feminino">Mulher cis</option>
            <option value="feminino">Mulher trans</option>
            <option value="masculino">Homem cis</option>
            <option value="masculino">Homem trans</option>
            <option value="não-binário">Não-binarie</option>
            <option value="outro">Prefiro não responder</option>
          </select>

          <div className="docs" id="docs">
            <h3 id="hdocs">Documentos</h3>
          </div>
          <label>Identidade</label>
          <input onChange={(e) => {setForm({...form, identidade: e.target.value})}}
          value={form.identidade}
            name="rg"
            type="text"
            className="form-control form-group"
            placeholder="Somente números. Ex: 000000000"
          />
          <label>CPF*</label>
          <input onChange={(e) => {setForm({...form, cpf: e.target.value})}}
          value={form.cpf}
            name="cpf"
            type="text"
            className="form-control form-group"
            placeholder="Somente números. Ex: 00000000000"
          />
          <label>Possui veículo</label>
          <select onChange={(e) => {setForm({...form, veiculo: e.target.value})}} className="form-select" id="car" name="car"
          value={form.veiculo}>
            <option value="selecione">Selecione</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>

          <label>Habilitação</label>
          <select onChange={(e) => {setForm({...form, habilitacao: e.target.value})}} className="form-select" id="lic" name="lic"
          value={form.habilitacao}>
            <option value="selecione">Selecione</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
          <label>Crie uma senha</label>
          <input onChange={(e) => {setForm({...form, password: e.target.value})}}
          value={form.password}
            name="pass"
            type="password"
            className="form-control form-group"
            placeholder=""
          />
          <div className="d-grid gap-2">
            <input
              className="btn"
              type="submit"
              id="btn-form"
              value="Enviar"
              onClick={() => candidates()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
