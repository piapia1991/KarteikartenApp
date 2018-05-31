import React, {Component} from 'react';
import './App.css';
import {Header_Component} from "./Components/Header_Component";
import {Main_Component} from "./Components/Main_Component";

class App extends Component {
    render() {
        return (<div className="App">
                <Header_Component/>
                <Main_Component/>

            </div>

        )
    };
}

export default App;
