import React, { Component } from 'react';
import Login from '../components/login';

import * as loginActions from '../actions/login';

class LoginContainer extends Component {
    state = {  }
    render() {
        return (
            <Login />
        );
    }
}
const mapStateToProps = ({login}) => ({login})

export default LoginContainer;