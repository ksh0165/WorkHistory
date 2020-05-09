import React, {Component} from 'react'

class Counter extends Component{
    render(){
        let countStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        }
        
        return(
            <div style={countStyle}>
                {this.props.display}
            </div>
        )
    }
  }

export default Counter;