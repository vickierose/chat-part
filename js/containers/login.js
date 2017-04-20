import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/login';
import * as loginActions from '../actions/login';

class LoginContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Login {...this.props}/>
        );
    }
}
const mapStateToProps = ({login}) => ({login});
const mapActionsToProps = dispatch => bindActionCreators(loginActions, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);