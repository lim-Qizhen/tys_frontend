import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Container,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/UserReducer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StudentRegister = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const schools = [
    { value: "Anglican_High_School", label: "Anglican High School" },
  ];
  const subjectOptions = [
    { value: "Biology", label: "Biology" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Physics", label: "Physics" },
    { value: "Science_(Biology)", label: "Science (Biology)" },
    { value: "Science_(Chemistry)", label: "Science (Chemistry)" },
    { value: "Science_(Physics)", label: "Science (Physics)" },
  ];
  const examOptions = [
    { value: "Express", label: "Express" },
    { value: "Normal_(Academic)", label: "Normal Academic" },
    { value: "Normal_(Technical)", label: "Normal Technical" },
  ];
  const [numberOfExams, setNumberOfExams] = useState(1);
  const [subjects, setSubjects] = useState([""]);
  const [exams, setExams] = useState([""]);
  const handleAddExam = () => {
    setNumberOfExams(numberOfExams + 1);
    const subjectToAdd = [...subjects];
    const examToAdd = [...exams];
    subjectToAdd.push("");
    examToAdd.push("");
    setSubjects(subjectToAdd);
    setExams(examToAdd);
  };
  const allExams = () => {
    let number = [];
    for (let i = 1; i <= numberOfExams; i++) {
      number.push(i);
    }
    return number.map((element) => (
      <>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            select
            label="Subject"
            id="subject"
            value={subjects[element - 1]}
            onChange={(e) => {
              const toChange = [...subjects];
              toChange[element - 1] = e.target.value;
              setSubjects(toChange);
            }}
          >
            {subjectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            select
            label="Exam"
            value={exams[element - 1]}
            onChange={(e) => {
              const toChange = [...exams];
              toChange[element - 1] = e.target.value;
              setExams(toChange);
            }}
          >
            {examOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </>
    ));
  };
  const handleFirstNameChange = (e) => {
    dispatch(userActions.setFirstName(e.target.value));
  };
  const handleLastNameChange = (e) => {
    dispatch(userActions.setLastName(e.target.value));
  };
  const handleUsernameChange = (e) => {
    dispatch(userActions.setUsername(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(userActions.setEmail(e.target.value));
  };
  const handlePhoneChange = (e) => {
    dispatch(userActions.setPhone(e.target.value));
  };
  const handleSchoolChange = (e) => {
    dispatch(userActions.setSchool(e.target.value));
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const disableButton = () => {
    return (
      user.f_name === "" ||
      user.l_name === "" ||
      user.username === "" ||
      user.phone === "" ||
      user.email === "" ||
      user.school === "" ||
      // user.subjects === [] ||
      user.password === ""
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //create account
    const res = await axios.post("http://127.0.0.1:8000/students/new/", {
      first_name: user.f_name,
      last_name: user.l_name,
      username: `s_${user.username}`,
      contact: user.phone,
      email: user.email,
      school: user.school,
      subject: subjects,
      exams: exams,
      password: password,
    });
    console.log(res.data);
    //generating relevant papers for student
    const papers = await axios.get(
      `http://127.0.0.1:8000/students/papers/${subjects}/${exams}/`
    );
    console.log(papers.data);
    const studentPapers = []
    papers.data.map((paper)=>{
      studentPapers.push(paper.paper_id)
    })
    console.log(studentPapers)
    dispatch(userActions.setPapers(studentPapers))
    // if(typeof res.data !== "string"){
    //   history.push("/");
    // }
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
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={user.f_name}
              onChange={handleFirstNameChange}
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
              value={user.l_name}
              onChange={handleLastNameChange}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">s_</InputAdornment>
                ),
              }}
              value={user.username}
              onChange={handleUsernameChange}
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
              value={password}
              onChange={handlePasswordChange}
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
              value={user.email}
              onChange={handleEmailChange}
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
              value={user.phone}
              onChange={handlePhoneChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              select
              label="School"
              id="school"
              value={user.school}
              onChange={handleSchoolChange}
            >
              {schools.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {allExams()}
        </Grid>
        <Grid container justifyContent="flex-end">
          <IconButton
            aria-label="subject"
            size="large"
            onClick={handleAddExam}
            disabled={numberOfExams >= 3}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
          <Button
            variant="outlined"
            // disabled={disableButton}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default StudentRegister;
