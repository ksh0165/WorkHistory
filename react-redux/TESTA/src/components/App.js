import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
//import Footer from './Footer';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import {visibilityFilter} from '../reducers/visibilityFilter';

class App extends Component{
    
    render(){
        return(
            <div>
                <AddTodo onAddClick={this.props.handleAddTodo}/>
                <TodoList todos = {this.props.visibleTodos}
                        onTodoClick = {this.props.handleToggleTodo}/>              
                {/* <Footer filter={this.props.visibilityFilter}
                        onFilterChange={this.props.handleSetVisibilityFilter}/> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        visibleTodos: state.todos
        //visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTodo: (text) => {dispatch(actions.addTodo(text))},
        handleToggleTodo: (id) => {dispatch(actions.toggleTodo(id))}
        //handleSetVisibilityFilter: (filter) => {dispatch(actions.setVisibilityFilter(filter))}
    }
};

// const selectTodos = (todos, filter) => {
//     switch(filter){
//         case visibilityFilter.SHOW_ALL:
//             return todos;
//         case visibilityFilter.SHOW_COMPLETED:
//             return todos.filter(todo => todo.completed);
//         case visibilityFilter.SHOW_ACTIVE:
//             return todos.filter(todo => !todo.completed);
//         default:
//             console.warn('Type is not defined');
//     }
// }

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }))
}

export default connect(mapStateToProps,mapDispatchToProps)(App);