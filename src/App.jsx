import React from 'react'
import Header from './components/Header/Header'
import ShowBooks from './components/ShowBooks/ShowBooks'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import BookDetails from './components/BookDetails/BookDetails'
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Header />} /> */}
        <Route path='/book/:id' element= {<BookDetails />} />
        </Routes>
      <Header>
        <ShowBooks />
        </Header>
      </BrowserRouter>
    </div>
  )
}

export default App
