import React from 'react';
import './App.css';
import {  connect } from 'react-redux';

function mapStateToProps(inicial){
	return {
		value: inicial
	}
}

function mapDispatchToProps(dispatch){
	return{
		sum:() => dispatch({type: 'sum'})
	}
}


function App ({value, sum}) {
    return (
      <div className="App">
      	<p>Hello world! Click en el numero para aumentar el valor</p>
        <p id="click" onClick={() => sum() }>{value}</p>

      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
