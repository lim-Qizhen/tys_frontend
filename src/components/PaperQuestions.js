import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import StudentNavBar from "./StudentNavBar";
import { useParams, useHistory } from "react-router-dom";

const PaperQuestions = () => {
  const params = useParams();
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/student/${params.paper}/review`)
  }
  //get the paper questions
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
        {params.paper.split("_")[0]} {params.paper.split("_")[1]} {params.paper.split("_")[2]}
      </div>
      <div className="questions">
        <ol>
          <li style={{ marginBottom: "10px" }}>
            QUESTION
            <img
              src={"https://i.imgur.com/YIybWQ0.png?1"}
              alt="question 1"
              style={{ width: "60%" }}
            />
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
        <Button variant="outlined" color="inherit" onClick = {handleSubmit}>
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default PaperQuestions;
