import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";
import Trash from "../../components/Trash";
import { ToDoListContext } from "../../shared/context/toDoList";

import axios from "axios";

function Dashboard() {
  const [state, dispatch] = useContext(ToDoListContext);
  useEffect(() => {
    console.log("dd");
    axios
      .get("http://localhost:9000/todo/list")
      .then((res) => dispatch({ ToDoItems: res.data.result }))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <ToDo />
      <Footer />
      <Trash />
    </div>
  );
}

export default Dashboard;
