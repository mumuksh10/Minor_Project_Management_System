import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { useNavigate } from "react-router-dom";

const TeacherDash = () => {
  // const MyComponent = () => {
  //   return (
  //     <div>
  //       <h1>Minor Project Management System</h1>
  //       <p>
  //         You can upload and view whatever project you have already
  //         assigned/want to assign.
  //       </p>
  //     </div>
  //   );
  // };
  // // ReactDOM.render(<MyComponent />, document.querySelector(".content"));
  // // const rootElement = document.getElementById("content");
  // // const root = createRoot(rootElement);
  // // root.render(
  // //   <StrictMode>
  // //     <MyComponent />
  // //   </StrictMode>
  // // );

  // const viewProjectsButton = document.getElementById("view-projects");
  // const popup = document.getElementById("popup");

  // function showPopup() {
  //   popup.style.display = "flex";
  // }

  // function hidePopup() {
  //   popup.style.display = "none";
  // }

  // // hide popup when View Projects button is clicked
  // viewProjectsButton.addEventListener("click", () => {
  //   hidePopup();
  // });

  // // show popup when My Projects button is clicked
  // const myProjectsButton = document.querySelector('a[href="#my-projects"]');
  // myProjectsButton.addEventListener("click", showPopup);

  // // redirect to "view-projects.html" when View Projects button is clicked
  // const navigate = useNavigate;
  // viewProjectsButton.addEventListener("click", () => {
  //   navigate("/ViewProjects.js");
  // });
  return (
    <div className="page-background">
      <div className="navbar">
        <a href="/TeacherDash.js" onClick="location.reload();">
          Home
        </a>
        <a href="#requests">Requests</a>
        <a href="/ViewProjects.js">My Projects</a>
      </div>
      <div className="content">
        <h1>Minor Project Management System</h1>
        <br></br>
        <p>
          You can upload and view whatever project you have already
          assigned/want to assign.
        </p>
      </div>
      <div className="footer">
        <p>
          Copyright © 2023
          <br />
          <br />
          <strong>Devloper Credits</strong> <br />
          Aryahi Srivastava & Mumuksh Srivastava
        </p>
      </div>
      <div className="popup" id="popup">
        <div className="popup-content">
          <div className="popup-buttons">
            <img src="/Users/mumuksh/minor_login/public/bg_auto_x2.jpg" />
            <button id="view-projects">View Projects</button>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default TeacherDash;
