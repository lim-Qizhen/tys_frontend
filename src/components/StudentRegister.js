import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Container,
  IconButton,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const StudentRegister = () => {
  const schools = [{ value: "7101", label: "Anglican High School" }];
  const subjects = [
    { value: "B", label: "Biology" },
    { value: "C", label: "Chemistry" },
    { value: "P", label: "Physics" },
    { value: "SB", label: "Science (Biology)" },
    { value: "SC", label: "Science (Chemistry)" },
    { value: "SP", label: "Science (Physics)" },
  ];
  const exams = [
    { value: "E", label: "Express" },
    { value: "N", label: "Normal Academic" },
    { value: "T", label: "Normal Technical" },
  ];
  const [numberOfExams, setNumberOfExams] = useState(1);
  const handleAddSubject = () => {
    setNumberOfExams(numberOfExams + 1);
  };
  const examOptions = () => {
    let number = [];
    for (let i = 1; i <= numberOfExams; i++) {
      number.push(i);
    }
    return number.map((value) => (
      <>
        <Grid item xs={6}>
          <TextField required fullWidth select label="Subject" id="subject">
            {subjects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField required fullWidth select label="Exam">
            {exams.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </>
    ));
  };
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
        TYS- STUDENT REGISTRATION
      </header>
      <Container sx={{ marginTop: "10px", marginBottom: "10px" }} maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value="s_"
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
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              disabled
              fullWidth
              label="Country Code"
              id="outlined-disabled"
              value="+65 (SGP)"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="number"
              id="phone"
              autoComplete="phone"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth select label="School" id="school">
              {schools.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {examOptions()}
        </Grid>
        <Grid container justifyContent="flex-end">
          <IconButton
            aria-label="subject"
            size="large"
            onClick={handleAddSubject}
            disabled={numberOfExams >= 3}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
          <Button variant="outlined">Register</Button>
        </Grid>
      </Container>
    </>
  );
};

export default StudentRegister;
