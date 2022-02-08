import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import StudentNavBar from "./StudentNavBar";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const PaperQuestions = () => {
  const params = useParams();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/student/${params.paper}/review`);
    //still need to submit for marking into database
  };
  console.log(params);
  //get the paper questions ordered by question number
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/papers/${params.paper}/`).then((res) => {
      console.log(res.data);
      setQuestions(res.data);
    });
  }, []);
  console.log(questions);
  //print the questions and save the solutions
  const [answers, setAnswers] = useState([]);
  const handleChange = (e) => {
    // setAnswers(e.target.value)
    console.log(e.target.value);
  };
  const printQuestions = questions.map((question, index) => {
    return (
      <li style={{ marginBottom: "10px" }}>
        <img
          src={`${question.question_img}`}
          alt={`question ${index + 1}`}
          style={{ width: "60%" }}
        />
        <RadioGroup row onChange={handleChange}>
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
    );
  });

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
        {params.paper.split("_")[0]} {params.paper.split("_")[1]}{" "}
        {params.paper.split("_")[2]}
      </div>

      <div className="questions">
        <ol>{printQuestions}</ol>
      </div>
      <Grid container justifyContent="center">
        <Button variant="outlined" color="inherit" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </>
  );
};

export default PaperQuestions;
