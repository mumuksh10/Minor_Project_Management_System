//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import TeacherDash from "./pages/TeacherDash";
import ViewProjects from "./pages/ViewProjects";
import StudentDash from "./pages/StudentDash";
import ProjectStudents from "./pages/ProjectStudents";

//styled components
import { StyledContainer } from "./components/Styles";

// //Loader CSS
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <StyledContainer> */}
      <Routes>
        <Route
          path="/"
          element={
            <StyledContainer>
              <Home />
            </StyledContainer>
          }
        />
        <Route
          path="/StudentLogin.js"
          element={
            <StyledContainer>
              <StudentLogin />
            </StyledContainer>
          }
        />
        <Route
          path="/Login.js"
          element={
            <StyledContainer>
              <Login />
            </StyledContainer>
          }
        />
      </Routes>
      {/* </StyledContainer> */}
      <Routes>
        <Route path="/TeacherDash.js" element={<TeacherDash />} />
        <Route path="/ViewProjects.js" element={<ViewProjects />} />
        <Route path="/StudentDash.js" element={<StudentDash />} />
        <Route path="/ProjectStudents.js" element={<ProjectStudents />} />
      </Routes>
    </Router>
  );
}
export default App;
