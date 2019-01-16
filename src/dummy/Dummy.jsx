import react, { Componet } from 'react';
import { getInfo } from '../services/serviceCalls';

class Dummy extends Componet {

    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.state = {
            dummy:
            {
                id: this.id,
                name: '',
                age: 0,
                number: '',
                photo: '',
                bio: ''
            }

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


                    }
                })
            })
    }

    render(){
        
    }
}

export default Dummy;