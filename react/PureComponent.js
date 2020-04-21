//예제

import React, {PureComponent} from 'react';

class App extends PureComponent{
    state = {
        counter: 0,
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext){
    //     is(this.state.counter !== nextState.counter){
    //         return true;
    //     }
    //     return false;
    // } => PureComponent
    onClick = () => {
        this.setState({
            array: [...this.state.array, 1],
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default App;

-------------------------------------------------------------------------
import React, {PureComponent} from 'react';

class Try extends PureComponent{
    render(){
        const {tryInfo} = this.props;
        return (
        <li>
             <div>{tryInfo.try}</div>
             <div>{tryInfo.result}</div>
        </li>
        );
    }
}

export default Try;
