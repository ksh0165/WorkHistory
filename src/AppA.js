import React, {Component} from 'react'
import Counter from './Counter'

class AppA extends Component{
    render(){
    let commonStyle = {
        margin: 0,
        padding: 0
    }
    let divStyle = {
        width: 250,
        textAlign: "center",
        backgroundColor: "#20202",
        padding: 40,
        fontFamily: "sans-serif",
        color: "#999999",
        borderRadius: 10
    }
    let textStyle = {
        emphasis:{
            fontSize: 38,
            ...commonStyle
        },
        smallEmphasis:{
            ...commonStyle
        },
        small: {
            fontSize: 17,
            opacity: 0.5,
            ...commonStyle
        }
    }
        return(
            <div style={divStyle}>
                <Counter />
                <h2 style={textStyle.smallEmphasis}>LIGHTNING STRIKES</h2>
                <h2 style={textStyle.emphasis}>WORLDWIDE</h2>
                <h2 style={textStyle.small}>(since you loaded this example)</h2>
            </div>
        )
    }
  }

export default AppA;