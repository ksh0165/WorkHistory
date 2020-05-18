import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

class AddTodo extends Component{ 
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={e=>this.handleClick(e)}>
                    추가
                </button>
            </div>
        )
    }
    handleClick = (e) => {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default AddTodo;