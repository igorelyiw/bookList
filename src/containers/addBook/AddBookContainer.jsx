import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { message } from 'antd';
import styled from 'styled-components';

import { postBookThunk } from '../../store/booksSlice'
import BookForm from '../BookForm';

const Wrapper = styled.div``;
const Title = styled.h1`
text-align:center;
`;
const AddBookContainer = () => {
  const dispatch = useDispatch()
  let history = useHistory();
  let id =  Math.floor(Math.random() * 100);

  const handleSubmit = (obj) => {
    dispatch(postBookThunk(obj))
    message.info('Successfully completed');
    history.push('/')
  }
  return (
    <Wrapper>
      <Title>Add a Book</Title>
      <BookForm id={id} handleSubmit={(obj) => handleSubmit(obj)} />
    </Wrapper>
  )
}

export default AddBookContainer
