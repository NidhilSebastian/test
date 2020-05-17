import React from 'react';
import Login from './components/Login';
import Home from './containers/Home'
import Layout from './components/Layout'
import './App.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators } from './store/App';

function App(props) {
  if(!props.user){
    return <Login {...props}/>
  }
  return (
    <div className="container-fluid">
       <Layout></Layout>
    </div>
  );
}

export default connect(
  state => ({ ...state.app }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
