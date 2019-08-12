import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GetToken from './containers/GetToken'
import SearchImage from './containers/SearchImage'

function App() {
    return (
        <div className="App">
            <Router>

                <Route path="/" exact component={GetToken}/>
                <Route path="/images" exact component={SearchImage}/>
            </Router>
        </div>
    );
}

export default App;
