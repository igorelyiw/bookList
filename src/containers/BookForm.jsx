import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
min-width:220px;
max-width:400px;
margin:24px auto;
`;
const FormikWrapper = styled(Form)`
display:flex;
flex-direction:column;
`;
const Input = styled(Field)`
padding:5px;
margin-top:15px;
`;
const CustomButton = styled(Button)`
margin-top:15px;
`;

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Write title!'),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Write author'),

  ISBN: Yup.number()
    .min(10, "Must be more than 10 characters")
    .required("This field is requried")
});
const BookForm = props => {
  const { handleSubmit, title = '', author = '', category = '', ISBN = 0, id = '' } = props;
  return (
    <Wrapper>
      <Link to="/"><Button>Back to List</Button></Link>
      <Formik
        initialValues={{
          title,
          author,
          category,
          ISBN,
          id
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          debugger
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <FormikWrapper>
            <Input name="title" placeholder="Write  title of book..." />
            {errors.title && touched.title ? (
              <div>{errors.title}</div>
            ) : null}
            <Input name="author" placeholder="Write author of book ..." />
            {errors.author && touched.author ? (
              <div>{errors.author}</div>
            ) : null}
            <Field as="select" name="category" style={{ padding: '5px', marginTop: '15px' }} defaultValue={category} >
              <option >Choose a book category</option>
              <option value="Travel">Travel</option>
              <option value="Health and Lifestyle">Health  Lifestyle</option>
              <option value="Picture Books">Picture Books</option>
              <option value="Children's and Young Adult">Children's and Young Adult</option>
              
            </Field>
            <Input name="ISBN" type="number" placeholder="Write ISBN  book ..." />
            {errors.ISBN && touched.ISBN ? <div>{errors.ISBN}</div> : null}
            <CustomButton type="primary" htmlType="submit" >Submit</CustomButton>
          </FormikWrapper>
        )}
      </Formik>
    </Wrapper>
  )
}

export default BookForm
