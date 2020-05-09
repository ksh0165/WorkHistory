import React, {Component} from 'react'

class AppC extends Component{
    constructor(props){
        super(props);
        this.state = {strike:0};
    }
    timerTick = () => {
        this.setState({
            strike: this.state.strike + 100
        })
    }
    componentDidMount(){
        setInterval(this.timerTick, 1000);
    }
    render(){
        return(
        <p>{this.state.strike}</p>
        )
    }
  }

export default AppC;