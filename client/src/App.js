import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Register from './new/Register';
import View from './home/View';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null
    };
  };

  componentDidMount() {
    fetch('http://localhost:9000/api/students')
        .then(response => response.json())
        .then(result =>  this.setState({list: result}))
        .catch(error => error);
  }

  render() {

    {if (!this.state.list) return null}

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="../logo.svg" width="50" height="50" alt="penguin"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'./home'}><a className="nav-item nav-link" href="#">Home</a></Link>
                        <Link to={'./new'}><a className="nav-item nav-link" href="#">New</a></Link>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Route path="/new" exact component={Register} />
                <Route path="/home" render={() => <View list={this.state.list}/>} />
            </div>
        </Router>
    );
  }
}

export default App;