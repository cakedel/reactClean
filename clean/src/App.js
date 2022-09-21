import React from 'react'
import Wrapper from './components/Wrapper.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Sub01 from './components/Sub01.js'
import Sub02 from './components/Sub02.js'
import Sub03 from './components/Sub03.js'
import Sub04 from './components/Sub04.js'
import Board from './components/Board.js'
import Footer from './components/Footer.js'
import { Route, Routes } from 'react-router-dom'

import "./css/basic.scss"

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/sub01' element={<Sub01 />}></Route>
        <Route path='/sub02' element={<Sub02 />}></Route>
        <Route path='/sub03' element={<Sub03 />}></Route>
        <Route path='/sub04' element={<Sub04 />}></Route>
        <Route path='/board' element={<Board />}></Route>
      </Routes>
      <Footer />
    </Wrapper>
  )
}

export default App