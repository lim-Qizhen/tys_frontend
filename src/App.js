import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Booking from "./components/Booking";
import PaperQuestions from "./components/PaperQuestions";
import PaperReview from "./components/PaperReview";
import PaperStart from "./components/PaperStart";
import Public from "./components/Public";
import StudentConsultations from "./components/StudentConsultations";
import StudentHome from "./components/StudentHome";
import StudentRegister from "./components/StudentRegister";
import TutorConsultations from "./components/TutorConsultations";
import TutorRegister from "./components/TutorRegister";

function App() {
  return (
    <div style={{ minWidth: "600px" }}>
      <BrowserRouter>
        <Route exact path="/" component={Public} />
        <Route exact path="/student" component={StudentHome} />
        <Route exact path="/student/register" component={StudentRegister} />
        <Route exact path="/tutor" component={TutorConsultations} />
        <Route exact path="/tutor/register" component={TutorRegister} />
        <Route exact path="/student/:paper" component={PaperStart} />
        {/* <Route path="/page-one/:item" component = {PaperQuestions} /> */}
        <Route exact path="/student/:paper/questions" component={PaperQuestions}
        />
        <Route exact path="/student/paper/review" component={PaperReview} />
        <Route
          exact
          path="/student/consultations"
          component={StudentConsultations}
        />
        <Route exact path="/student/booking" component={Booking} />
        {/* <Route exact path="/student/profile" component={StudentProfile} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
