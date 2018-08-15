import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/notFound';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/editContacts';

import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager1" />

            <div className="container">
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/about' component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
        
      </Provider>
    );
  }
}

export default App;
