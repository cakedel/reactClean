import React from 'react'
import Aside from './Aside'
import Article from './Article'

const Board = ({ content }) => {
  const pageName = '질문과 답변'
  const num = 0;
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

export default Board