import React, { Component } from 'react';
import { getInfo } from '../services/serviceCalls';

class Dummy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dummy:
            {
                id: this.props.id,
                name: '',
                age: 0,
                number: '',
                photo: '',
                bio: ''
            },
            errorMsg: ''

        }
    }

    componentDidMount() {
        getInfo({ id: this.state.dummy.id })
            .then((response) => {
                if (response.error) {
                    return Promise.reject(response);
                }
                this.setState({
                    dummy: {
                        name: response.name,
                        age: response.age,
                        number: response.number,
                        photo: response.photo,
                        bio: response.bio
                    }
                })
            }).catch((error) => {
                this.setState({ errorMsg: error.error });
            })
    }

    render() {
        return (
            <div>
                {this.state.dummy.name}
                {this.state.dummy.age}
            </div>)

    }
}

export default Dummy;