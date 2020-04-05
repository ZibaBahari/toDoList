import React from "react";
import "./style.css";
import {
  FormControlLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Checkbox,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const GreenCheckbox = withStyles({
  root: {
    color: "#00bcd1",
    "&$checked": {
      color: "#00bcd1",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function CheckBox(props) {
  const handleChange=(e)=>{
    props.onClick && props.onClick(e)
  }
  const trashClick=(id, e)=>{

    props.onChange && props.onChange(id)
  }
  return (
    <div>
      {props.ToDoItems.map((item, index)=>
    
      <ListItem role="listitem" key ={index}>
        <ListItemIcon>
          <FormControlLabel checked={item.done}  value={item._id} onClick={handleChange} control={<GreenCheckbox name="checkedG"  />} />
        </ListItemIcon>
        <ListItemText primary={item.title} />
        {props.trash &&
        <a href="#"id={item._id} className="trash-single" onClick={(e) => trashClick(item._id,e)} >
        <DeleteIcon  />
        </a>
}

      </ListItem>
)}
    </div>
  );
}
export default CheckBox;
