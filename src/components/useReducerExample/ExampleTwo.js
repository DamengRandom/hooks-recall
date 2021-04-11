import React, { useState, useReducer } from 'react';
import { ADD_COMMENT } from "../../constants/reducerVariables";

function commentReducer(state, action) {
  let { comments } = state;
  switch(action.type) {
    case ADD_COMMENT:
      return { comments: [...comments, action.payload] };
    default:
      return { comments };
  }
}

export default function ExampleTwo() {
  const [currentFormData, setCurrentFormData] = useState({
    comment: '',
    email: '',
  });
  const [state, dispatch] = useReducer(commentReducer, { comments: [] });

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: ADD_COMMENT, payload: currentFormData });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Please enter comment</label>
          <input id="comment" type="text" name="comment" value={currentFormData.comment} onChange={event => setCurrentFormData({
            ...currentFormData,
            comment: event.target.value,
          })} />
        </div>
        <div>
          <label htmlFor="email">Please enter email</label>
          <input id="email" type="text" name="email" value={currentFormData.email} onChange={event => setCurrentFormData({
            ...currentFormData,
            email: event.target.value,
          })} />
        </div>
        <input type="submit" value="Submit" />
      </form>

      {state.comments.length > 0 && (
        <>
          <p>Submitted comment (just demo only to prove useReducer hooks functional properly)</p>
          <ul>
            {state.comments.map((data, index) => <li key={`${data}-${index}`}>{data.email}: {data.comment}</li>)}
          </ul>
        </>
      )}
    </div>
  )
}

// useReducer hook function: submit a form, especially when we edit a form, we can pass dispatch function instead of passing handleEdit function to the form UI, which is pretty handy !!