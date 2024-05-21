import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Book from './components/Book'
import CtLeft from './components/CtLeft'
import { books } from '../data.json'

function App() {
  const [searchResults, setSearchResults] = useState([]); 
    const handleSearchResults = (results) => {
        setSearchResults(results);
    };
    const handleFilterChange = (selectedSuppliers) => {
      if (selectedSuppliers.length === 0) {
        setSearchResults(books);
      } else {
        const filteredResults = books.filter(book =>
          selectedSuppliers.includes(book.current_seller.name)
        );
        setSearchResults(filteredResults);
      }
    };
    
    
  return <div>
     <Header onSearchResults={handleSearchResults} />
    <div className='content'>
    <CtLeft onFilterChange={handleFilterChange} />
      <div className='book'>
      {searchResults.length > 0 ? ( 
        searchResults.map(book => (
        <div key={book.id}>
        <Book data={book} />
        </div>
        ))
        ) : (
          books.map(book => (
            <div key={book.id}>
                <Book data={book} />
            </div>
        ))
    )}
      </div>
    </div>

    <Footer />
  </div>
}

export default App
