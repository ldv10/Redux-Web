import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {  Provider } from 'react-redux';

function sumar(inicial = 0, operacion){
	switch(operacion.type){
		case 'sum':
			return inicial + 1;
		default:
			return inicial;
	}
}

function main(){
	window.removeEventListener('load', main, false);

	const store = createStore(sumar);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
	 document.getElementById('root'));
}

window.addEventListener('load',main,false);
