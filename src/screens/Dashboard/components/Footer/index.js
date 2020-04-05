import React, { useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ToDoListContext } from "../../../../shared/context/toDoList";
import "./style.css";
import ToDoList from "../ToDoList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Footer() {
  const [state, dispatch] = useContext(ToDoListContext);

  const ToDo = state.ToDoItems.filter((item) => item.done === false);
  const countToDo = ToDo.length;

  const Done = state.ToDoItems.filter((item) => item.done === true);
  const countDone = Done.length;

  const All = state.ToDoItems;
  const countAll = All.length;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="footer">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label={"To Do(" + countToDo + ")"} {...a11yProps(0)} />

          <Tab label={"Done(" + countDone + ")"} {...a11yProps(1)} />

          <Tab label={"All(" + countAll + ")"} {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ToDoList ToDoItems={ToDo} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ToDoList ToDoItems={Done} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ToDoList ToDoItems={All} />
      </TabPanel>
    </div>
  );
}
