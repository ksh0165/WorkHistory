import React, {Component} from 'react'

class Counter extends Component{
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
        let counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        }
        return(
            <h1 style={counterStyle}>
                {this.state.strike}
            </h1>
        )
    }
  }

export default Counter;