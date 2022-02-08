//NEED TO GET THE STUDENTS' PAPERS
//CAN SAVE THE PAPER_ID TO THE STATE TO KNOW WHAT PAPER WE ARE DOING

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
import { useDispatch, useSelector } from "react-redux";
import { useSlider } from "@mui/base";

const StudentHome = () => {
  const user = useSelector((state) => state.user);

  //get all relevant papers
  const relevantPapers = [];
  //create array of states depending on number of subjects x2
  const [open, setOpen] = useState([false]);
  const handleClick = (sequence) => {
    const initial = open[sequence];
    const updated = [...open];
    updated[sequence] = !initial;
    setOpen([...updated]);
  };
  const examPapers = () => {
    return user.subjects.map((subject, index) => (
      <>
        <ListItemButton
          onClick={() => {
            handleClick(index);
          }}
        >
          <ListItemText primary={subject} />
          {open[index] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open[index]}>
          <ListItemText sx={{ pl: 4 }}>2017</ListItemText>
          <ListItemText sx={{ pl: 4 }}>2016</ListItemText>
        </Collapse>
      </>
    ));
  };
  const completedPapers = () => {
    return user.subjects.map((subject, index) => (
      <>
        <ListItemButton
          onClick={() => {
            handleClick(index+user.subjects.length);
          }}
        >
          <ListItemText primary={subject} />
          {open[index+user.subjects.length] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open[index+user.subjects.length]}>
          <ListItemText sx={{ pl: 4 }}>2017</ListItemText>
          <ListItemText sx={{ pl: 4 }}>2016</ListItemText>
        </Collapse>
      </>
    ));
  };

  return (
    <div>
      <StudentNavBar />
      <p>Welcome, {user.f_name}</p>
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
          <ListSubheader sx={{ backgroundColor: "black", color: "white" }}>
            Practice Papers
          </ListSubheader>
          {examPapers()}
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
          <ListSubheader sx={{ backgroundColor: "black", color: "white" }}>
            Completed Papers
          </ListSubheader>
          {completedPapers()}
        </Box>
      </div>
    </div>
  );
};

export default StudentHome;
