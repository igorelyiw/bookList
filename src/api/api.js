import * as axios from 'axios'

export const booksAPI = {
  getBooks() {
    return axios.get('http://localhost:3001/books/')
      .catch(error => {
        console.log(error);
      })
  },
  deleteBook(id) {
    axios.delete('http://localhost:3001/books/' + id)
      .catch(error => {
        console.log(error);
      });
  },
  postBook(obj) {
    axios.post('http://localhost:3001/books', obj).catch(error => {
      console.log(error);
    });
  },
  updateBook(props) {
    axios.put('http://localhost:3001/books/' + props.bookId, props.values)
  }
}
