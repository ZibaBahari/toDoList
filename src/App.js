import React from "react";
import Dashboard from "./screens/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import { ToDoProvider } from "./shared/context/toDoList";

function App() {
  return (
    <ToDoProvider>
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
      </BrowserRouter>
    </ToDoProvider>
  );
}

export default App;
