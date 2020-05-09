import React, {Component} from 'react'
import AppC from './AppC'

class AppB extends Component{
    render(){
    let TStyle = {
        width: 250,
        textAlign: "center",
        backgroundColor: "black",
        padding: 40,
        fontFamily: "sans-serif",
        color: "#999",
        borderRadius: 10
    }
        return(
            <p style={TStyle}>
                <AppC/>
            </p>
        )
    }
  }

export default AppB;