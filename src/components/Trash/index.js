import React,{useContext} from 'react'
import './style.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {ToDoListContext} from '../../shared/context/toDoList'


function Trash(){
  const[state, dispatch] = useContext(ToDoListContext)

  const ShowDelete=()=>{
    dispatch({ trash:!state.trash});

  }
    return(
      <div>
        {state.trash ?
          <div className="trash trash-red" onClick={ShowDelete}>
          <DeleteIcon/>  
        </div>
        :
        <div className="trash" onClick={ShowDelete}>
          <DeleteIcon/>  
        </div>
}
      </div>
        
    )
}
export default Trash