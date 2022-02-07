//log out function remove the accesss token and do the authorisation thing
//prepare profile page (must retrieve the user profile)

import React from "react";
import { AppBar, Container, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const StudentNavBar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "black" }}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/student" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  HOME
                </Button>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/student/consultations" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  CONSULTS
                </Button>
              </Link>
              {/* <Link to="/student/profile" style={{ textDecoration: "none" }}></Link> */}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginLeft: "10px",
                }}
              >
                PROFILE
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginLeft: "10px",
                }}
              >
                LOGOUT
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default StudentNavBar;
