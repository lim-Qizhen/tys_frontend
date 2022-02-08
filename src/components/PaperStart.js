//JUST RETRIEVE THE PAPER TITLE FROM THE PAPER_ID

import React, { useEffect, useState } from "react";
import StudentNavBar from "./StudentNavBar";
import { Button, Box } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const PaperStart = () => {
  const [paper, setPaper] = useState({});
  const params = useParams();console.log(params)

  // useEffect(() => {
  //   const getPaper = async () => {
  //     const res = await axios.get("http://127.0.0.1:8000/papers/all/");
  //     console.log(res.data[0]);
  //     setPaper(res.data[0]);
  //   };
  //   getPaper();
  // }, []);

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
        {params.paper.split("_")[0]} {params.paper.split("_")[1]} {params.paper.split("_")[2]}
      </div>
      <Box textAlign="center">
        <Button variant="outlined" color="inherit">
          START
        </Button>
      </Box>
    </>
  );
};

export default PaperStart;
