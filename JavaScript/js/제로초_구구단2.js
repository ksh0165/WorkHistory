<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>react gugudan game</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        class GuGuDan extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                    first: Math.ceil(Math.random()*9),
                    second: Math.ceil(Math.random()*9),
                    value: '',
                    result: ''
                }
            }
            render(){
                return(
                    <div>
                        <div>{this.state.first}곱하기{this.state.second}는?</div>
                        <form>
                            <input type="number" value={this.state.value}/>
                                <button>입력!</button>
                        </form>
                        <div>{this.state.result}</div>
                    </div>
                );
            }
        }
    </script>
    <script type="text/babel">
        ReactDOM.render(<GuGuDan/>, document.querySelector('#root'));
    </script>
</body>
</html>
