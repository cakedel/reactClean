import React from 'react'
import Aside from './Aside'
import Article from './Article'

const Sub04 = ({content}) => {
  const num = 3;
  const pageName = '사무실청소'
  return (
    <div className='SubPage'>
      <div className="navBar">
        <div className="inner">
          {pageName} / 깔끔이청소
        </div>
      </div>
      <div className='inner sub'>
        <Article content={content} num={num} />
        <Aside />
      </div>

    </div>
  )
}

export default Sub04