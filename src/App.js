import './App.css';
import { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import styled from 'styled-components';
import { Link, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getBooksList } from './store/booksSlice';
import BooksListContainer from './containers/booksList/BooksListContainer';
import AddBookContainer from './containers/addBook/AddBookContainer';
import EditBookContainer from './containers/editBook/EditBookContainer'

const { Header, Content, Footer } = Layout;
const Image = styled.img`
width:200px;
cursor:pointer;
`;
const LayoutWrapper = styled(Layout)`
min-height:100vh;
width:100vw;
`;

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooksList())
  }, [])
  return (
    <LayoutWrapper>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Link to="/">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Booklist_logo.svg/1200px-Booklist_logo.svg.png" />
        </Link>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: '64px', width: '100%' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Route exact path="/"
            render={() => <Redirect to={'/list'} />} />
          <Route path="/list" render={() => <BooksListContainer />} />
          <Route path="/addBook" render={() => <AddBookContainer />} />
          <Route path="/editBook/:bookId?" render={() => <EditBookContainer />} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ihor Elyiv</Footer>
    </LayoutWrapper>
  );
}

export default App;
