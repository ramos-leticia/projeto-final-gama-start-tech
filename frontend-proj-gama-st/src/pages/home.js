import React, {Component} from "react";
import '../../src/index.css';
import illustration from '../assets/img/img-side.svg'

class Home extends Component {
    render() {
        return(
            <>
                <div className="showcase">
                    <div className="left">
                        <div className="title">
                            <h2>Estamos contratando!</h2>
                            <h1>As melhores vagas você encontra aqui na JobsNET</h1>
                            <button className='btn'>Cadastre-se</button>
                        </div>
                    </div>
                    <div>
                        <div className='right'>
                            <img src={illustration} alt="Computador e celulares ilustrando contratação"/>
                        </div>
                    </div>                                      
                    
                </div>
            </>
        )
    }
}


 export default Home;