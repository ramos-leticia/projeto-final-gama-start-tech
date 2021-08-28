import React, {Component} from "react";
import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";


class Login extends Component {
    render() {
        return(
            <>
            <div className="login-user">
                <h2>Faça seu login</h2>
                <form className="mb-3">
                    <div className="col-auto">
                        <label htmlFor='user'>E-mail</label>
                        <input type='text' name='user' className='form-control form-group' />
                    </div>
                    <div className="col-auto">
                        <label htmlFor='password'>Senha</label>
                        <input type='password' name='password' className='form-control form-group' />             

                    </div>
                    <div className="d-grid gap-2"><input type="submit" className="btn"  value="Entrar"/>
                    </div>                    
                </form>
            </div>
                
            </>
        )
    }
}


 export default Login;