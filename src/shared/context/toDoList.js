import React, { createContext, useState } from "react";

const initialState = {
  trash: false,
  ToDoItems: [],
};
function reducer(state, action) {
  return { ...state, ...action };
}

export const ToDoListContext = createContext();

export const ToDoProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log(state.ToDoItems);

  return (
    <ToDoListContext.Provider value={[state, dispatch]}>
      {props.children}
    </ToDoListContext.Provider>
  );
};
