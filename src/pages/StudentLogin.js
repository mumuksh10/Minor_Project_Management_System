//styled components
import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledLabel,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from "../components/Styles";

import Logo from "./../assets/logo.png";

//formik
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";

//react-icons
import { FiMail, FiLock } from "react-icons/fi";

//loader
import { ThreeDots } from "react-loader-spinner";

//auth and redux
import { connect } from "react-redux";
import { loginStudent } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";

const StudentLogin = ({ loginStudent }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/StudentDash.js`;
    navigate(path);
  };
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30} color={colors.theme}>
          Student Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid Email Address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            loginStudent(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="name.regno@muj.manipal.edu"
                icon={<FiMail />}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="*********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit" onClick={routeChange}>
                    Login
                  </StyledFormButton>
                )}

                {isSubmitting && (
                  <ThreeDots
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Teacher? <TextLink to="/Login.js">Login Here</TextLink>
        </ExtraText>
      </StyledFormArea>
      {/* <CopyrightText>All rights reserved &copy;2023</CopyrightText> */}
    </div>
  );
};

export default StudentLogin;
