import { Box, Button } from "@mui/material";
import React from "react";
import StudentNavBar from "./StudentNavBar";
import { useSelector } from "react-redux";

const StudentConsultations = () => {
  const user = useSelector((state) => state.user)
  console.log(user.consultations)
  return (
    <>
      <StudentNavBar />
      <Box
        className="upcoming"
        sx={{
          p: 2,
          border: "1px solid grey",
          marginTop: "50px",
          borderRadius: "10px",
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
          Upcoming Consultations
        </p>
        <ul>
          <li>
            27th August 11am
            <span style={{ float: "right" }}>
              <Button variant="outlined" size="small" color="inherit">
                START
              </Button>{" "}
              <Button variant="outlined" size="small" color="inherit">
                CANCEL
              </Button>
            </span>
          </li>
        </ul>
      </Box>
      <Box
        className="past"
        sx={{
          p: 2,
          border: "1px solid grey",
          marginTop: "50px",
          borderRadius: "10px",
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
          Past Consultations
        </p>
        <ul style={{ color: "grey" }}>
          <li>
            27th January 2022 11am
            <span style={{ float: "right" }}>
              <Button variant="outlined" size="small" color="inherit">
                REVIEW
              </Button>
            </span>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default StudentConsultations;
