import React, { useState } from "react";
import StudentNavBar from "./StudentNavBar";
import {
  Box,
  ListItemText,
  ListSubheader,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const StudentHome = () => {
  //create array of states depending on number of subjects
  const [open, setOpen] = useState([false, false]);
  const handleClick = (sequence) => {
    const initial = open[sequence];
    const updated = [...open];
    updated[sequence] = !initial;
    setOpen([...updated]);
  };

  return (
    <div>
      <StudentNavBar />
      <p>Welcome, user</p>
      <div
        className="all-papers"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "500px",
            maxWidth: 300,
            bgcolor: "background.paper",
            margin: "20px",
          }}
        >
          <ListSubheader sx={{backgroundColor:"black", color:"white"}}>Completed Papers</ListSubheader>
          <ListItemButton
            onClick={() => {
              handleClick(0);
            }}
          >
            <ListItemText primary="Physics" />
            {open[0] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[0]}>
            <ListItemText sx={{ pl: 4 }}>2017</ListItemText>
            <ListItemText sx={{ pl: 4 }}>2016</ListItemText>
          </Collapse>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "500px",
            maxWidth: 300,
            bgcolor: "white",
            margin: "20px",
          }}
        >
          <ListSubheader sx={{backgroundColor:"black", color:"white"}}>Practice Papers</ListSubheader>
          <ListItemButton
            onClick={() => {
              handleClick(1);
            }}
          >
            <ListItemText primary="Physics" />
            {open[1] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[1]}>
            <ListItemText sx={{ pl: 4 }}>2017</ListItemText>
            <ListItemText sx={{ pl: 4 }}>2016</ListItemText>
          </Collapse>
        </Box>
      </div>
    </div>
  );
};

export default StudentHome;
