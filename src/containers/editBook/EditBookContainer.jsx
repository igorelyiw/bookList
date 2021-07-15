import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { message } from 'antd';
import styled from 'styled-components'

import { updateBookThunk } from '../../store/booksSlice'
import BookForm from '../BookForm'

const Wrapper = styled.div``;
const Title = styled.h1`
text-align:center;
`;
const EditBookContainer = props => {
  const { bookId } = useParams()
  const state = useSelector(state => state.books);
  let history = useHistory();
  const dispatch = useDispatch()
  const book = state.booksList.filter(item => item.id == bookId)[0];
  const handleSubmit = (bookId, values) => {
    dispatch(updateBookThunk({ bookId, values }));
    message.info('Successfully completed');
    history.push('/')
  }

  return (
    <Wrapper>
      <Title>Edit a Book</Title>
      {book &&
        <BookForm
          handleSubmit={(values) => handleSubmit(bookId, values)}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          ISBN={book.ISBN}
        />
      }
    </Wrapper>
  )
}

export default EditBookContainer
