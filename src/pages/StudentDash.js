const StudentDash = () => {
  return (
    <div className="page-background">
      <div className="navbar">
        <a href="/StudentDash.js" onClick="location.reload();">
          Home
        </a>
        <a href="/ProjectStudents.js">Projects</a>
      </div>
      <div className="content">
        <h1>Minor Project Management System</h1>
        <br></br>
        <p>You can view and select the available project you want to do</p>
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
    </div>
  );
};

export default StudentDash;
