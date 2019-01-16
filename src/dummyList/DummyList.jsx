import React, {Component} from 'react';
import {getList} from '../services/serviceCalls';

class DummyList extends Component{
    constructor(props){
        super(props);
    this.state = {
        token: '',
        errorMsg: '',
        dummies: []
    };

    this.handleDummyList = this.handleDummyList.bind(this);
    }

   handleDummyList(){
       getList({token : (this.state.token)})
       .then((response) => {
           if(response.error) {
               return Promise.reject(response);
           }
           this.setState({token: response.token, dummies: response.result});
           console.log(this.state.dummies);
       })
       .catch((error) => {

       })
   }

   render(){
       
       return(
           <div>
           <button onClick={this.handleDummyList}>Hey</button>
           </div>
       )
   }
}

export default DummyList;