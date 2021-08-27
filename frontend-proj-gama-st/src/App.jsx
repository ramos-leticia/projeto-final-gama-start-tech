import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/navbar";
import Footer from './components/footer';
import Formulario from "./Formulario";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from "./components/landing";
import Login from "./pages/login";

function App() {
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact={true} component={Landing}/>
                    <Route path="/cadastro" exact={true} component={Formulario} />
                    <Route path="/login" exact={true} component={Login} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;