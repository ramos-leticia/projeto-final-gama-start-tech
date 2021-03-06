import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Formulario.css";
import axios from "axios";

class Formulario extends Component {
  constructor() {
    super();
    this.state = {
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
    };

    this.changeName = this.changeName.bind(this);
    this.changeBirth = this.changeBirth.bind(this);
    this.changeLogradouro = this.changeLogradouro.bind(this);
    this.changeNumero = this.changeNumero.bind(this);
    this.changeBairro = this.changeBairro.bind(this);
    this.changeCidade = this.changeCidade.bind(this);
    this.changeEstado = this.changeEstado.bind(this);
    this.changeCep = this.changeCep.bind(this);
    this.changeFone = this.changeFone.bind(this);
    this.changeCel = this.changeCel.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeCargo = this.changeCargo.bind(this);
    this.changeCivil = this.changeCivil.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeRg = this.changeRg.bind(this);
    this.changeCpf = this.changeCpf.bind(this);
    this.changeCar = this.changeCar.bind(this);
    this.changeLicense = this.changeLicense.bind(this);
    this.changeSenha = this.changeSenha.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeName(e) {
    this.setState({
      nomeCompleto: e.target.value,
    });
  }
  changeBirth(e) {
    this.setState({
      dataNascimento: e.target.value,
    });
  }
  changeLogradouro(e) {
    this.setState({
      logradouro: e.target.value,
    });
  }
  changeNumero(e) {
    this.setState({
      numero: e.target.value,
    });
  }
  changeBairro(e) {
    this.setState({
      bairro: e.target.value,
    });
  }
  changeCidade(e) {
    this.setState({
      cidade: e.target.value,
    });
  }
  changeEstado(e) {
    this.setState({
      estado: e.target.value,
    });
  }
  changeCep(e) {
    this.setState({
      cep: e.target.value,
    });
  }
  changeFone(e) {
    this.setState({
      telefoneFixo: e.target.value,
    });
  }
  changeCel(e) {
    this.setState({
      celular: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  changeCargo(e) {
    this.setState({
      cargoPretendido: e.target.value,
    });
  }
  changeCivil(e) {
    this.setState({
      estadoCivil: e.target.value,
    });
  }
  changeGender(e) {
    this.setState({
      genero: e.target.value,
    });
  }
  changeRg(e) {
    this.setState({
      identidade: e.target.value,
    });
  }
  changeCpf(e) {
    this.setState({
      cpf: e.target.value,
    });
  }
  changeCar(e) {
    this.setState({
      veiculo: e.target.value,
    });
  }
  changeLicense(e) {
    this.setState({
      habilitacao: e.target.value,
    });
  }
  changeSenha(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const registrado = {
      nomeCompleto: this.state.nomeCompleto,
      dataNascimento: this.state.dataNascimento,
      logradouro: this.state.logradouro,
      numero: this.state.numero,
      bairro: this.state.bairro,
      cidade: this.state.cidade,
      estado: this.state.estado,
      cep: this.state.cep,
      telefoneFixo: this.state.telefoneFixo,
      celular: this.state.celular,
      email: this.state.email,
      cargoPretendido: this.state.cargoPretendido,
      estadoCivil: this.state.estadoCivil,
      genero: this.state.genero,
      identidade: this.state.identidade,
      cpf: this.state.cpf,
      veiculo: this.state.veiculo,
      habilitacao: this.state.habilitacao,
      password: this.state.password,
    };

    axios.post("http://localhost:4000/app/cadastro", registrado).then((res) => {
      console.log(res.data);
      alert("Dados cadastrados com sucesso");
    });

    this.setState({
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
  }

  onBlurCep(e) {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }   

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.localidade,
        data.bairro,
        data.uf,
        data.logradouro,);
          
               
      });
  }

  render() {
    return (
      <>
        <div className="container-form">
          <div className="form-area">
            <div className="form-title">
              <h2 id="h2">Cadastro</h2>
              <h3 id="h3">Dados pessoais</h3>
            </div>
            <form onSubmit={this.onSubmit}>
              <label for="name">Nome completo*</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeName}
                value={this.state.nomeCompleto}
              />
              <label for="birthdate">Data de nascimento*</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="ex: DD/MM/AAAA"
                onChange={this.changeBirth}
                value={this.state.dataNascimento}
              />
              <label for="cep">CEP*</label>
              <input
                name="cep"
                type="text"
                className="form-control form-group"
                placeholder="Somente n??meros. Ex: 00000000"
                onChange={this.changeCep}
                value={this.state.cep}
                onBlur={this.onBlurCep}
              />
              <label for="address">Logradouro*</label>
              <input
                name="logradouro"
                type="text"
                className="form-control form-group"
                placeholder=" "
                onChange={this.changeLogradouro}
                value={this.state.logradouro}
              />
              <label for="number">Numero*</label>
              <input
                name="numero"
                type="text"
                className="form-control form-group"
                placeholder=" "
                onChange={this.changeNumero}
                value={this.state.numero}
              />
              <label for="neighbour">Bairro*</label>
              <input
                name="bairro"
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeBairro}
                value={this.state.bairro}
              />
              <label for="city">Cidade*</label>
              <input
                name="cidade"
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeCidade}
                value={this.state.cidade}
              />
              <label for="state">Estado</label>
              <input
                name="uf"
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeEstado}
                value={this.state.estado}
              />              
              <label for="phone">Telefone fixo</label>
              <input
                type="text/phone"
                className="form-control form-group"
                placeholder=" ex: 21999999999"
                onChange={this.changeFone}
                value={this.state.telefoneFixo}
              />
              <label for="celphone">Celular*</label>
              <input
                type="text/phone"
                className="form-control form-group"
                placeholder="ex: 21999999999"
                onChange={this.changeCel}
                value={this.state.celular}
              />
              <label for="email">E-mail*</label>
              <input
                type="text/email"
                className="form-control form-group"
                placeholder="ex: seuemail@email.com.br"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <label for="job">Profiss??o/Cargo pretendido*</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="Digite o cargo pretendido"
                onChange={this.changeCargo}
                value={this.state.cargoPretendido}
              />
              <label for="civil">Estado civil</label>
              <select
                className="form-select"
                id="estado-civil"
                name="estado-civil"
                onChange={this.changeCivil}
                value={this.state.estadoCivil}
              >
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="outro">Outro</option>
              </select>

              <label for="gender">Como voc?? se identifica</label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                onChange={this.changeGender}
                value={this.state.genero}
              >
                <option value="feminino">Mulher cis</option>
                <option value="feminino">Mulher trans</option>
                <option value="masculino">Homem cis</option>
                <option value="masculino">Homem trans</option>
                <option value="n??o-bin??rio">N??o-binarie</option>
                <option value="outro">Prefiro n??o responder</option>
              </select>

              <div className="docs" id="docs">
                <h3 id="hdocs">Documentos</h3>
              </div>
              <label for="rg">Identidade</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="Somente n??meros. Ex: 000000000"
                onChange={this.changeRg}
                value={this.state.identidade}
              />
              <label for="cpf">CPF*</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="Somente n??meros. Ex: 00000000000"
                onChange={this.changeCpf}
                value={this.state.cpf}
              />
              <label for="car">Possui ve??culo</label>
              <select
                className="form-select"
                id="car"
                name="car"
                onChange={this.changeCar}
                value={this.state.veiculo}
              >
                <option value="sim">Sim</option>
                <option value="n??o">N??o</option>
              </select>

              <label for="license">Habilita????o</label>
              <select
                className="form-select"
                id="lic"
                name="lic"
                onChange={this.changeLicense}
                value={this.state.habilitacao}
              >
                <option value="sim">Sim</option>
                <option value="n??o">N??o</option>
              </select>
              <label for="password">Crie uma senha</label>
              <input
                type="password"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeSenha}
                value={this.state.password}
              />
              <div className="d-grid gap-2">
                <input
                  className="btn"
                  type="submit"
                  id="btn-form"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Formulario;
