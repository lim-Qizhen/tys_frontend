import React from "react";
import StudentNavBar from "./StudentNavBar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StudentProfile = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  // if (user.accessToken === "") {
  //   history.push("/");
  // }
  //get user papers scores
  return (
    <>
      <StudentNavBar />
    </>
  );
};

export default StudentProfile;
