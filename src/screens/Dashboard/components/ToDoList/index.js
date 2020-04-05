import React, { useContext, useState, useEffect } from "react";
import CheckBox from "../../../../components/CheckBox";
import "./style.css";
import { ToDoListContext } from "../../../../shared/context/toDoList";
import axios from "axios";

const ToDoList = (props) => {
  const [state, dispatch] = useContext(ToDoListContext);

  const onClick = (e) => {
    const id = e.target.value;
    const newss = state.ToDoItems;
    const item = state.ToDoItems.findIndex((x) => x._id == id);
    newss[item].done = true;
    console.log("dd", e.target.value, item, newss);

    dispatch({ ToDoItems: newss });
    axios
      .post("http://localhost:9000/todo/update", {
        id,
      })
      .then((res) => console.log("done"))
      .catch((err) => {
        console.error(err);
      });
  };

  const trashClick = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:9000/todo", {
        data: {
          Id: id,
        },
      })
      .then((res) => dispatch({ ToDoItems: res.data.result }))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="ToDoList">
      <div className="ToDoListItem">
        <CheckBox
          ToDoItems={props.ToDoItems}
          onClick={onClick}
          trash={state.trash}
          onChange={trashClick}
        />
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 360 10"
        enable-background="new 0 0 360 10"
      >
        <polygon
          fill="#DAD9D9"
          points="359,0 359,7.5 352.5,0.5 345,8.5 337.5,0.5 330,8.5 322.5,0.5 315,8.5 307.5,0.5 300,8.5 292.5,0.5
        285,8.5 277.5,0.5 270,8.5 262.5,0.5 255,8.5 247.5,0.5 240,8.5 232.5,0.5 225,8.5 217.5,0.5 210,8.5 202.5,0.5 195,8.5 187.5,0.5
        180,8.5 172.5,0.5 165,8.5 157.5,0.5 150,8.5 142.5,0.5 135,8.5 127.5,0.5 120,8.5 112.5,0.5 105,8.5 97.5,0.5 90,8.5 82.5,0.5
        75,8.5 67.5,0.5 60,8.5 52.5,0.5 45,8.5 37.5,0.5 30,8.5 22.5,0.5 15,8.5 7.5,0.5 1,7.5 1,0 0,0 0,10 7.5,2 15,10 22.5,2 30,10
        37.5,2 45,10 52.5,2 60,10 67.5,2 75,10 82.5,2 90,10 97.5,2 105,10 112.5,2 120,10 127.5,2 135,10 142.5,2 150,10 157.5,2 165,10
        172.5,2 180,10 187.5,2 195,10 202.5,2 210,10 217.5,2 225,10 232.5,2 240,10 247.5,2 255,10 262.5,2 270,10 277.5,2 285,10
        292.5,2 300,10 307.5,2 315,10 322.5,2 330,10 337.5,2 345,10 352.5,2 360,10 360,0 "
        ></polygon>
      </svg>
    </div>
  );
};

export default ToDoList;
