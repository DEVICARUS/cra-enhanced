import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './App.css';

import { loadUsers } from '../store/actions/userActions'

export class App extends React.Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    return (
      <div>
        {this.props.user.list.length}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadUsers }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);