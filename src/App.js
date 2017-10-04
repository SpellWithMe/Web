import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import GoogleLogin from './components/auth/googleLogin';
import SpellingList from './components/spelling/spellingList';
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './store/config';
import { Provider } from 'react-redux';
import './App.css';

const history = createBrowserHistory();

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
					<img src={process.env.PUBLIC_URL + '/images/SpellWithMe_logo_md.jpg'}  className="App-logo" alt="SpellWith.Me" />
					</header>
					<GoogleLogin />        
				</div> 

				{/*<Route path="/lists" component={SpellingList}/>*/}
			</Provider>  
		);
	}
}

export default App;
