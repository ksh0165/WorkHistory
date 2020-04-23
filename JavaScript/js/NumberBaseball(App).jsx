/*Try.jsx + App.jsx*/
//미완성 코드 - 제로초 강의를 듣다 
import React, {PureComponent} from 'react';
import Try from './Try';

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i< 4; i+=1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)));
        array.push(chosen);
    }
}

class App extends PureComponent{
    state = {
        result: '',
		value: '',
        answer: getNumbers(),
        tries: [],
    };
    //this.inputRef.current.focus();

    shouldComponentUpdate(nextProps, nextState, nextContext){

    }

    onSubmitForm = (e) => {
        const {value, tries, answer} = this.state;
        e.preventDefault();
        if(value === answer.join('')){
            this.setState((prevState)=>{
                return {
                    resullt: '홈런!',
                    tries: [...prevState.tries, {try:value, result:'홈런!'}]
                }
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value:'',
                answer: getNumbers(),
                tries: [],
            });
            this.inputRef.current.focus();
        }else{
            const answerArray = value.split('').map((v)=> parseInt(v));
            let strike = 0 ;
            let ball = 0;
            if(tries.length >= 9){
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
                this.inputRef.current.focus();
            }else{
                for(let i = 0; i < 4; i+= 1){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if (answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
            }
            this.setState((prevState)=>{
                
            })
        }
    }
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
    inputRef = createRef();

    render() {
        const {result, value, tries} = this.state;
        return (
            <div>
                {result}
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} vale={value} onChange={this.onChange}/>   
                </form>
                <div>시도:{tries.length}</div>
                <ul>
                    {tries.map((v,i)=>{
                        return (
                            <Try key={`${i+1}차 시도 :`} tryInfo={v}/>
                        );
                    })}
                </ul>    
            </div>
        )
    }
}

export default App;
