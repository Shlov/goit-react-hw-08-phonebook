import { Button } from "components/ListContacts/ListContacts.styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "Redux/auth/operation";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(3).max(16).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(32).required()

})

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, {resetForm}) => {
    console.log(value)
    dispatch(register(value))
    resetForm()
  }

  const initialValues = {name:'', email: '', password: ''}

  return (
    <>
      <h1>Register</h1>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form>
          <label>
            Name
            <Field type = 'text' name = 'name'/>
            <ErrorMessage component="div" name='name'/>
          </label>
          <label>
            Email
            <Field type = 'email' name = 'email'/>
            <ErrorMessage component="div" name='email'/>
          </label>
          <label>
            Password
            <Field type = 'password' name = 'password'/>
            <ErrorMessage component="div" name='password'/>
          </label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </>

  )
}