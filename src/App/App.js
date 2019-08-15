import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './App.css';

import Users from '../containers/Users'

//import { loadUsers } from '../store/actions/userActions'

export class App extends React.Component {
  render() {
    return (
      <div>
        <b>Names of users:</b>
        <Users />
        <i>Loaded from <a href="/api/users/list">/api/users/list</a></i>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // user: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    // loadUsers 
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);