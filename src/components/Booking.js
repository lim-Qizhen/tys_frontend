import React from "react";
import StudentNavBar from "./StudentNavBar";
import { Grid, Container, TextField, Button, Typography } from "@mui/material";

const Booking = () => {
  return (
    <>
      <StudentNavBar />
      <Container sx={{ marginTop: "30px" }} maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center">CONSULTATION SLOT</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Date"
              required
              fullWidth
              id="Date"
              label="Date"
              autoFocus
              type="date"
              InputLabelProps={{ shrink: true }}
              default={new Date()}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="Time"
              required
              fullWidth
              id="Time"
              label="Time"
              autoFocus
              type="time"
              InputLabelProps={{ shrink: true }}
              inputProps={{ step: 3000 }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
          <Button variant="outlined">Book Consultation</Button>
        </Grid>
      </Container>
    </>
  );
};

export default Booking;
