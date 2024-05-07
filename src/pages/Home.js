import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./../components/Styles";

//Logo
import Logo from "./../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledTitle size={65}>Minor Project Management System</StyledTitle>
      <StyledSubTitle size={19}>Made by Mumuksh and Aryahi</StyledSubTitle>

      <ButtonGroup>
        <StyledButton to="/Login.js">Teacher Login</StyledButton>
        <StyledButton to="/StudentLogin.js">Student Login</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
