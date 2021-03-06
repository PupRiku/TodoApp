import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Input/Button/Button";
import Headings from "../../../components/UI/Headings/Headings";
import Message from "../../../components/UI/Message/Message";

import * as actions from "../../../store/actions";
import styled from "styled-components";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required")
    .min(2, "Too short."),
  lastName: Yup.string()
    .required("Your last name is required")
    .min(2, "Too short."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(8, "The password is too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password doesn't match.")
    .required("You need to confirm your password."),
});

const MessageWrapper = styled.div`
position: absolute;
bottom: 0;
`

const SignUp = ({ signUp, loading, error }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Headings noMargin size="h1" color="white">
            Sign up for an account
          </Headings>
          <Headings bold size="h4" color="white">
            Fill in your details to register your new account
          </Headings>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "Signing up..." : null}
              type="submit"
            >
              Sign Up
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const matchDispatchToProps = {
  signUp: actions.signUp,
};

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
