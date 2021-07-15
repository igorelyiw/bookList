import { Button, Table } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom';

const BooksTable = props => {
  const { booksList, deleteBook } = props
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'ISBN',
      dataIndex: 'ISBN',
      key: 'ISBN',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <NavLink to={'/editBook/' + record.id}><Button type="primary" >Edit</Button></NavLink>
          <Button type="primary" danger onClick={() => deleteBook(record.id)}>Delete</Button>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table rowKey='id' dataSource={booksList} columns={columns} />
    </div>
  )
}

export default BooksTable
