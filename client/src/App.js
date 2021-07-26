const { default: BookList } = require('./components/BookList');

function App () {
  return (
    <div id="main">
      <h1>Ninja's Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
