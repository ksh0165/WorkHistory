import createStore from 'redux';

const initialState = {
    task: '',
    tasks: []
  };

  function tasksReducer(state = initialState, action) {
    switch (action.type) {
      case 'INPUT_TASK':
        return {
          ...state,
          task: action.payload.task
        };
      case 'ADD_TASK':
        return {
          ...state,
          tasks: state.tasks.concat([action.payload.task])
        };
      default:
        return state;
    }
  }

function addReducer(state = initialState, action){
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
            default:
            return state;
    }
}

function resetReducer(state = initialState, action){
    switch (action.type){
        case 'RESET_TASK':
        return {
            ...state,
            tasks: []
        };
        default:
        return state;
    }
}