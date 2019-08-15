import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import User from '../components/User/User'

import { loadUsers } from '../store/actions/userActions';

class Users extends React.Component {
  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    return (
      <div>
        {this.props.users.list.map((user) => <User name={user.name} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    loadUsers 
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);