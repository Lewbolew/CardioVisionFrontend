import React, { Component } from 'react';

type Props = {
    test: boolean;
};

type State = {
    test: boolean;
};

class Login extends Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            test: true,
        };
    }
    render() {
        return (
            <>
                <p>test of the login here</p>
            </>
        );
    }
}

export default Login;
