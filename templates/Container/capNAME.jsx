import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { myAction } from '../store/actions/myActionsFile';

class capNAME extends React.Component {
  render() {
    return (
      <div>
        {/* Your component's code */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // my: state.myReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 
    // myAction
  }, dispatch) 
}

export default connect(mapStateToProps, mapDispatchToProps)(capNAME);