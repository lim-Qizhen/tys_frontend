import React, { useEffect, useState } from "react";
import StudentNavBar from "./StudentNavBar";
import { Button, Box } from "@mui/material";
import axios from "axios";

const PaperStart = () => {
  const [paper, setPaper] = useState({});

  useEffect(() => {
    const getPaper = async () => {
      const res = await axios.get("http://127.0.0.1:8000/papers/all/");
      console.log(res.data[0]);
      setPaper(res.data[0]);
    };
    getPaper();
  }, []);

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
        {paper.subject} {paper.year}
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
