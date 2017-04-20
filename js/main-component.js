import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ChatContainer from './containers/chat';
import LoaderContainer from './containers/loader';
import LoginContainer from './containers/login';
import WSContainer from './containers/websockets';

class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Provider>
            <div>
                <ChatContainer/>
                <LoaderContainer/>
                <LoginContainer/>
                <WSContainer/>
            </div>
            </Provider>
        );
    }
}

export default Main;