import {inputTask, addTask} from '../actions/tasks'
import React from 'react'
function TodoApp({ store }) {
    const { task, tasks } = store.getState();
    return (
      <div>
        <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
        <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
        <ul>
          {
            tasks.map(function(item, i) {
              return (
                <li key={i}>{item}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }

export default TodoApp