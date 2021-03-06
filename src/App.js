import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Contact from './components/contact';
import OrderNow from './components/orderNow';
import ChooseLocation from './components/orderNow/chooseLocation.js';
import { AppContext } from './components/context/appContext.js';
import MenuStepper from './components/orderNow/menuStepper.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path='/orderNow/menu'>
						<MenuStepper />
					</Route>
					<Route path='/orderNow/chooseLocation'>
						<ChooseLocation />
					</Route>
					<Route exact path="/orderNow">
						<OrderNow />
					</Route>
					<Route>
						<Homepage />
					</Route>
				</Switch>
			</div>
		);
	}
}

App.contextType = AppContext;
export default App;
