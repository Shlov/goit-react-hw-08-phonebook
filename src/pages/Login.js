import { Button } from '../components/Button/Button';
import { Formik, Form, Field, ErrorMessage, } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "Redux/auth/operation";

import * as Yup from 'yup';
import { Heading, FormLabel,  } from '@chakra-ui/react';

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required()
})

export const Login = () => {

  const dispatch = useDispatch();
  const handleSubmit = (value, {resetForm}) => {
    dispatch(logIn(value))
    resetForm()
  }

  const initialValues = {email: '', password: ''}

  return (
    <>
      <Heading size='lg' p='8px'>Login</Heading>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form>
          <FormLabel >
            Email
            <ErrorMessage component="div" name='email'/>
            <Field type = 'email' name = 'email'/>
          </FormLabel>
          <FormLabel>
            Password
            <Field type = 'password' name = 'password'/>
            <ErrorMessage component="div" name='password'/>
          </FormLabel>
          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </>
  )
}



