import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
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
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="form-area">
            <div className="form-title">
              <h2>Cadastro</h2>
              <h3>Dados pessoais</h3>
            </div>
            <form>
              <label for="name">Nome completo</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeName}
                value={this.state.nomeCompleto}
              />
              <label for="birthdate">Data de nascimento</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="ex: DD/MM/AAAA"
                onChange={this.changeBirth}
                value={this.state.dataNascimento}
              />
              <label for="address">Logradouro</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=" "
                onChange={this.changeLogradouro}
                value={this.state.logradouro}
              />
              <label for="number">Numero</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=" "
                onChange={this.changeNumero}
                value={this.state.numero}
              />
              <label for="neighbour">Bairro</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeBairro}
                value={this.state.bairro}
              />
              <label for="city">Cidade</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeCidade}
                value={this.state.cidade}
              />
              <label for="state">Estado</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder=""
                onChange={this.changeEstado}
                value={this.state.estado}
              />
              <label for="cep">CEP</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="ex: 00000-000"
                onChange={this.changeCep}
                value={this.state.cep}
              />
              <label for="phone">Telefone fixo</label>
              <input
                type="text/phone"
                className="form-control form-group"
                placeholder=" ex: (xx) xxxxx-xxxx"
                onChange={this.changeFone}
                value={this.state.telefoneFixo}
              />
              <label for="celphone">Celular</label>
              <input
                type="text/phone"
                className="form-control form-group"
                placeholder="(xx) xxxxx-xxxx"
                onChange={this.changeCel}
                value={this.state.celular}
              />
              <label for="email">E-mail</label>
              <input
                type="text/email"
                className="form-control form-group"
                placeholder="ex: seuemail@email.com.br"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <label for="job">Cargo pretendido</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="Digite o cargo pretendido"
                onChange={this.changeCargo}
                value={this.state.cargoPretendido}
              />
              <label for="civil">Estado civil</label>
              <select
                id="estado-civil"
                name="estado-civil"
                onChange={this.changeCivil}
                value={this.state.estadoCivil}
              >
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="outro">Outro</option>
              </select>

              <label for="gender">Como você se identifica</label>
              <select
                id="gender"
                name="gender"
                onChange={this.changeGender}
                value={this.state.genero}
              >
                <option value="feminino">Mulher cis</option>
                <option value="feminino">Mulher trans</option>
                <option value="masculino">Homem cis</option>
                <option value="masculino">Homem trans</option>
                <option value="não-binário">Não-binarie</option>
                <option value="outro">Prefiro não responder</option>
              </select>

              <div className="docs">
                <h3>Documentos</h3>
              </div>
              <label for="rg">Identidade</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="ex: 11.111.111-1"
                onChange={this.changeRg}
                value={this.state.identidade}
              />
              <label for="cpf">CPF</label>
              <input
                type="text"
                className="form-control form-group"
                placeholder="111.111.111-11"
                onChange={this.changeCpf}
                value={this.state.cpf}
              />
              <label for="car">Possui veículo</label>
              <select
                id="car"
                name="car"
                onChange={this.changeCar}
                value={this.state.veiculo}
              >
                <option value="sim">Sim</option>
                <option value="não">Não</option>
              </select>

              <label for="license">Habilitação</label>
              <select
                id="car"
                name="car"
                onChange={this.changeLicense}
                value={this.state.habilitacao}
              >
                <option value="sim">Sim</option>
                <option value="não">Não</option>
              </select>
            </form>
            <button className="button">Enviar</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
