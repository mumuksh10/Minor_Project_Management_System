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
import { loginTeacher } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = ({ loginTeacher }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/TeacherDash.js`;
    navigate(path);
  };
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30} color={colors.theme}>
          Teacher Login
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
            loginTeacher(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="yourname@jaipur.manipal.edu"
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
          Student? <TextLink to="/StudentLogin.js">Login Here</TextLink>
        </ExtraText>
      </StyledFormArea>
      {/* <CopyrightText>All rights reserved &copy;2023</CopyrightText> */}
    </div>
  );
};

export default Login;
