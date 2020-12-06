// import React, { useReducer } from 'react';
// // import React, { useState, useReducer } from 'react';

// const ACTIONS = { // better practice
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// }

// function reducer(state, action) {
//   switch(action.type) {
//     case ACTIONS.INCREMENT:
//       return {
//         count: state.count + 1
//       };
//     case ACTIONS.DECREMENT:
//       return {
//         count: state.count - 1
//       }
//     default:
//       return state;
//   }
// }

// export default function UseReducerDemo() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   // const [count, setCount] = useState(0);

//   function increment() {
//     // setCount(prevCount => prevCount + 1);
//     dispatch({ type: ACTIONS.INCREMENT });
//   };

//   function decrement() {
//     // setCount(prevCount => prevCount - 1);
//     dispatch({ type: ACTIONS.DECREMENT });
//   };

//   return (
//     <div>
//       <p>useReducer also allows user to manage the state, when state changes, useReducer will update the state, triggered by actions</p>
//       <div>
//         <p>Example here:</p>
//         <button onClick={decrement}>-</button>
//         {/* <span>{count}</span> */}
//         <span>{state.count}</span>
//         <button onClick={increment}>+</button>
//       </div>
//     </div>
//   );
// };

import React, { useState, useReducer } from 'react';

const ACTIONS = { // better practice
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
        return updateTodo(todos, action.payload.todo);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, complete: false };
}

function updateTodo(todos, updatedTodo) {
  return todos.map(currentTodo =>
    currentTodo.name === updatedTodo.name ?
      (currentTodo = updatedTodo) : currentTodo
  );
}

export default function UseReducerDemo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('');
  };

  const toggleTodo = (todo) => {
    todo = {
      ...todo,
      complete: !todo.complete
    }
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { todo } });
  }

  return (
    <div>
      <p>useReducer also allows user to manage the state, when state changes, useReducer will update the state, triggered by actions</p>
      <div>
        <p>Example here:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </form>
        <div>
          {todos.map((todo,index) =>
            <div key={`${index}-${todo.name}`}>
              <label style={{ color: todo.complete ? 'teal' : 'black' }}>
                {todo.name}
                <input type="checkbox" value={todo.complete} onClick={() => toggleTodo(todo)} />
              </label>
            </div>)}
        </div>
        {/* {console.log('check updated todos !!', todos)} */}
      </div>
    </div>
  );
};
