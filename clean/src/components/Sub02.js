import React, { useState } from 'react'
import Aside from './Aside'
import Article from './Article'

const Sub02 = ({ content }) => {
  const pageName = '아파트입주청소'
  const num = 1;
  return (
    <div className='SubPage'>
      <div className="navBar">
        <div className="inner">
          {content[num].tit} / 깔끔이청소
        </div>
      </div>
      <div className='inner sub'>
        <Article content={content} num={num} />
        <Aside />
      </div>

    </div>
  )
}

export default Sub02