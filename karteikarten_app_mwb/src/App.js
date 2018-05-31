import React, {Component} from 'react';
import './App.css';
import {Header_Component} from "./Components/Header_Component";
import {MainComponent} from "./Components/MainComponent";

class App extends Component {
    render() {
        return (<div className="App">
                <Header_Component/>
                <MainComponent/>

            </div>

        )
    };
}

export default App;
