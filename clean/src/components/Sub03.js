import React from 'react'
import Aside from './Aside'
import Article from './Article'

const Sub03 = ({content}) => {
  const pageName = '이사/상가청소'
  const num = 2;
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

export default Sub03