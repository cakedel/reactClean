import React from 'react'
import MainVisual from './MainVisual'
import MainContents from './MainContents'
import Customer from './Customer'

const Main = () => {
  return (
    <main className='Main'>
      <MainVisual />
      <MainContents />
      <Customer />
    </main>
  )
}

export default Main