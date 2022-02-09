//must retrieve the accuracy of the questions to display the right or wrong

import React from "react";
import StudentNavBar from "./StudentNavBar";
import { Grid, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useParams } from "react-router-dom";

const PaperReview = () => {
  const params = useParams();
  console.log(params); //params.paper = paper_id
  //retrieve the questions for review
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/students/review_papers/${user.username}/${params.paper}`
      )
      .then((res) => {
        setQuestions(res.data);
      });
  }, []);
  console.log(questions);
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
        <p style={{ fontWeight: "normal" }}>Score: 75%</p>
      </div>
      <div className="questions">
        <ol>
          <li style={{ marginBottom: "10px" }}>
            QUESTION
            <img src={"https://imgur.com/YIybWQ0"} alt="question 1" />
            <br />
            Your answer: <span style={{ textDecoration: "underline" }}>
              C
            </span>{" "}
            Correct answer:{" "}
            <span style={{ textDecoration: "underline" }}>A</span>{" "}
            <CloseIcon style={{ color: "red" }} />
          </li>
          <li style={{ marginBottom: "10px" }}>
            QUESTION
            <img src={"https://imgur.com/YIybWQ0"} alt="question 1" />
            <br />
            Your answer: <span style={{ textDecoration: "underline" }}>
              C
            </span>{" "}
            Correct answer:{" "}
            <span style={{ textDecoration: "underline" }}>C</span>{" "}
            <DoneIcon style={{ color: "green" }} />
          </li>
        </ol>
      </div>
      <Grid container justifyContent="center">
        <Button variant="outlined" color="inherit">
          Book Consultation
        </Button>
      </Grid>
    </>
  );
};

export default PaperReview;
