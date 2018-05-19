import React, {Component} from "react";
import axios from 'axios';
import './Today.css'

class Today extends Component{
    constructor(){
        super();
        this.state ={
            ltcprice: '',
            btcprice: '',
            ethprice: ''
        };
    }
    componentWillMount(){
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
        .then(response => {
            this.setState({btcprice :  response.data.BTC.USD});
            this.setState({ ethprice: response.data.ETH.USD });
            this.setState({ ltcprice: response.data.LTC.USD });
        })
        .catch(e => {
            console.log(e)
        })
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}