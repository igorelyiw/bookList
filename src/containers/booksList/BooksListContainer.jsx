import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { deleteBookThunk } from '../../store/booksSlice'

import BooksTable from './BooksTable'

const Wrapper = styled.div``;
const ButtonCustom = styled(Button)`
margin:15px;
`;
const BooksListContainer = () => {
  const state = useSelector(state => state.books)
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Link to="/addBook"><ButtonCustom type="primary">Add a Book</ButtonCustom></Link>
      <BooksTable
        booksList={state.booksList}
        deleteBook={(id) => dispatch(deleteBookThunk(id))}
      />
    </Wrapper>
  )
}

export default BooksListContainer
