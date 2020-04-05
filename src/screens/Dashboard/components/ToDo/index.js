import React,{useContext, useState} from 'react'
import Input from '../../../../components/Input'
import Buttons from '../../../../components/Buttons'
import './style.css'
import {ToDoListContext} from '../../../../shared/context/toDoList'
import axios from 'axios';

function ToDo(){
    
    const[state, dispatch] = useContext(ToDoListContext)
    const[Items, setItems] = useState()

    const Create=()=>{
        const title = Items;       
        axios
        .post('http://localhost:9000/todo', {title})
        .then((res) =>dispatch({ToDoItems:[...state.ToDoItems, res.data.result]}) )
        .catch(err => {
          console.error(err);
        });   
    }
    const onChange=(e)=>{
       
        setItems(e.target.value)
    }
    return(
        <div className="todo">
            <Input onChange={onChange}/>
            <Buttons onClick={Create}/>
        </div>
    )
}
export default ToDo