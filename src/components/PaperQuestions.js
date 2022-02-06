import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import StudentNavBar from "./StudentNavBar";

const PaperQuestions = () => {
  return (
    <>
      <StudentNavBar />
      <div
        style={{
          textAlign: "center",
          margin: "50px",
          fontWeight: "bold",
          display: "sticky",
        }}
      >
        2017 O Levels Science (Physics)
      </div>
      <div className="questions">
        <ol>
          <li style={{ marginBottom: "10px" }}>
            QUESTION
            <img src={"https://imgur.com/YIybWQ0"} alt="question 1" />
            <RadioGroup row>
              <FormControlLabel
                value="A"
                control={<Radio size="small" />}
                label="A"
              />
              <FormControlLabel
                value="B"
                control={<Radio size="small" />}
                label="B"
              />
              <FormControlLabel
                value="C"
                control={<Radio size="small" />}
                label="C"
              />
              <FormControlLabel
                value="D"
                control={<Radio size="small" />}
                label="D"
              />
            </RadioGroup>
          </li>
          <li>
            QUESTION
            <img src={"https://imgur.com/YIybWQ0"} alt="question 2" />
            <RadioGroup row>
              <FormControlLabel
                value="A"
                control={<Radio size="small" />}
                label="A"
              />
              <FormControlLabel
                value="B"
                control={<Radio size="small" />}
                label="B"
              />
              <FormControlLabel
                value="C"
                control={<Radio size="small" />}
                label="C"
              />
              <FormControlLabel
                value="D"
                control={<Radio size="small" />}
                label="D"
              />
            </RadioGroup>
          </li>
        </ol>
      </div>
      <Grid container justifyContent="center">
        <Button variant="outlined">Submit</Button>
      </Grid>
    </>
  );
};

export default PaperQuestions;
