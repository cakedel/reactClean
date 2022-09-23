import React, { useState } from 'react'
import Aside from './Aside'
import Article from './Article'
import '../css/Subpage.scss'

const Sub01 = ({ content }) => {
  const num = 0;
  return (
    <div className='SubPage'>
      <div className="navBar">
        <div className="inner">
          {content[0].tit} / 깔끔이청소
        </div>
      </div>
      <div className='inner sub'>
        <Article content={content} num={num} />
        <Aside />
      </div>

    </div>
  )
}

export default Sub01