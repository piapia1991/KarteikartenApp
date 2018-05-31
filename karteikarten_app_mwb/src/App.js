import React, {Component} from 'react';
import './App.css';
import {HeaderComponent} from "./Components/HeaderComponent";
import {MainComponent} from "./Components/MainComponent";

class App extends Component {
    render() {
        return (<div className="App">
                <HeaderComponent/>
                <MainComponent/>

            </div>

        )
    };
}

export default App;
