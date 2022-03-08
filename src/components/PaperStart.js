//JUST RETRIEVE THE PAPER TITLE FROM THE PAPER_ID

import React, { useState } from "react";
import StudentNavBar from "./StudentNavBar";
import { Button, Box } from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const PaperStart = () => {
  const user = useSelector((state) => state.user);
  const params = useParams();
  const history = useHistory()
  console.log(params)

  // const [complete,setComplete] = useState()
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8000/students/paper/score/${user.username}/${params.paper}/`
  //     )
  //     .then((res) => {
  //       setComplete(res.data[0].completed)
  //     });
  // });

  const handleStart = (e) => {
    e.preventDefault();
    history.push(`/student/${params.paper}/questions`)
  };

  return (
    <>
      <StudentNavBar />
      <div
        style={{
          textAlign: "center",
          marginTop: "30vh",
          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        {params.paper.split("_")[0]} {params.paper.split("_")[1]}{" "}
        {params.paper.split("_")[2]}
      </div>
      <Box textAlign="center">
        <Button variant="outlined" color="inherit" onClick={handleStart}>
          START
        </Button>
      </Box>
    </>
  );
};

export default PaperStart;
