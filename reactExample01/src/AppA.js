import React, {Component} from 'react'
import AppB from './AppB'

class AppA extends Component{
    render(){
    let TStyle = {
        width: 250,
        textAlign: "center",
        backgroudColor: "black",
        padding: 40,
        fontFamily: "sans-serif",
        color: "#999",
        borderRadius: 10
    }
        return(
            <p style={TStyle}>
                <AppB color={this.props.color}/>
            </p>
        )
    }
  }

export default AppA;