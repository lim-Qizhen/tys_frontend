import React from "react";
import { Grid, TextField, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "3vh",
          marginBottom: "5vh",
          height: "10vh",
        }}
      >
        TYS - LOG IN
      </header>
      <div className="main" style={{ textAlign: "center" }}>
        <form>
          <Container sx={{ marginTop: "10px" }} maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid container justifyContent="center" sx={{ margin: "20px" }}>
                <Button variant="outlined">Log In</Button>
              </Grid>
            </Grid>
          </Container>
        </form>
        Don't have an account with us yet?
        <br />
        Register <Link to="/student/register">here for students</Link>, and{" "}
        <Link to="/tutor/register">here for tutors</Link>.
      </div>
    </>
  );
};

export default Home;
