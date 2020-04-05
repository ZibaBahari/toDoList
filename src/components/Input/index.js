import React from "react";
import "./style.css";
import { TextField } from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#0097a7',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0097a7',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


function Input(props) {
   const onChange=(e)=>{
    props.onChange && props.onChange(e);
   }
  return (
    <div className="input">
        <CssTextField id="standard-basic" className="input" label="Add Task" onChange={onChange} />
    </div>
  );
}
export default Input;
