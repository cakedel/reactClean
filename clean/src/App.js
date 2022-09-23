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
  const CONTENT = [
    { id: 1, tit: "아파트 입주 청소", content: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등, 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다." },
    { id: 2, tit: "이사/상가청소", content: "오랫동안 누적된 공간의 묵은 때, 찌든 때,", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입주청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다." },
    { id: 1, tit: "사무실 청소", content: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소 작업 입니다. 사무실청소에 있어서 가장 중요한 점은 빠른 시간 내에 완벽한 작업을 마무리 하는 것이 중요합니다." },
  ]

  const COMPANY = {
    ceo:"전정선",
    name: "깔끔이청소",
    address: "부산광역시 북구 만덕2로 14 상가동 제314호",
    number: "사업자등록번호 : 606-11-45081",
    tel: "Tel : 051-331-3354",
    email: "e-mail : jjs3354@naver.com",
  }

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main content={CONTENT} />}></Route>
        <Route path='/sub01' element={<Sub01 content={CONTENT} />}></Route>
        <Route path='/sub02' element={<Sub02 content={CONTENT} />}></Route>
        <Route path='/sub03' element={<Sub03 content={CONTENT} />}></Route>
        <Route path='/sub04' element={<Sub04 content={CONTENT} />}></Route>
        <Route path='/board' element={<Board content={CONTENT} />}></Route>
      </Routes>
      <Footer content={COMPANY} />
    </Wrapper>
  )
}

export default App