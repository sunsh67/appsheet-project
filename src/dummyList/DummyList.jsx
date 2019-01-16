import React, { Component } from 'react';
import Dummy from '../dummy/Dummy';
import { getList } from '../services/serviceCalls';

class DummyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            errorMsg: '',
            dummies: []
        };

    }

    componentDidMount() {
        getList({ token: (this.state.token) })
            .then((response) => {
                if (response.error) {
                    return Promise.reject(response);
                }
                this.setState({ token: response.token, dummies: response.result });
            })
            .catch((error) => {
                this.setState({ errorMsg: error.error })
            })

    }

    render() {
        return (
            <div>
               {this.state.dummies.map(dummy => <Dummy id={dummy} key={dummy}></Dummy>)}
            </div>
        )
    }
}

export default DummyList;