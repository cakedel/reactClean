import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper'
import styled from 'styled-components'

const CONTENT = [
    { id: 1, tit: "아파트 입주 청소", content: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등, 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다." },
    { id: 2, tit: "이사/상가청소", content: "오랫동안 누적된 공간의 묵은 때, 찌든 때,", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입주청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다." },
    { id: 1, tit: "사무실 청소", content: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소 작업 입니다. 사무실청소에 있어서 가장 중요한 점은 빠른 시간 내에 완벽한 작업을 마무리 하는 것이 중요합니다." },
]

const SlideItm = styled.div`
    .tit {
    font-size: 80px;
    font-weight: 900;
    margin-bottom: 20px;
    text-shadow:1px 0 3px rgba(255,255,255,0.25); 
    background: linear-gradient(to right top, #0a96ba, #032777, #333333);
    color: transparent;
    -webkit-background-clip: text;
    }
    .content {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px; 
    color: tomato;  
    }
    p {
    font-size: 15px;
    word-break: keep-all;
    }
`

const Dots = styled.ul`
    display: flex;
    gap: 10px;
    position: absolute;
    top: 100px;
    height: 300px;
    width: 600px;
    li {
        width: 20px;
        height: 20px;
        background: #ddd;

        &.on {
            background:tomato;
        }
    }
`
const Arrows = styled.div`
position: absolute;
top:100px;
left:50%;
height: 300px;
width: 600px;
i{
    font-size:30px;
    color: #fff;
    background:rgba(0,0,0, 0.2);
    padding: 10px;
    border-radius:50%;
}
`
const SlideNum = styled.div`
position: absolute;
bottom:-150px;
height: 300px;
width: 600px;
font-size:30px;
color:#fff;
font-weight:700;
text-shadow: 0 0 5px  rgba(0,0,0, 0.2);
span {
    font-size:20px;
}
`
const MainVisual = () => {
    const [num, setNum] = useState();
    const MainSlideRef = useRef();
    return (
        <section className='MainVisual'>
            <div className="inner">
                <Swiper className='MainSlider'
                    modules={{ Autoplay }}
                    direction={"vertical"}
                    loop={true}
                    autoplay={{
                        delay: 2500,

                    }}
                    onSlideChange={it => setNum(it.realIndex)}
                    ref={MainSlideRef}>
                    {CONTENT.map((slide, idx) => {
                        return (
                            <SwiperSlide>
                                <SlideItm>
                                    <div className='tit'>{slide.tit}</div>
                                    <div className='content'>{slide.content}</div>
                                    <p>{slide.des}</p>
                                </SlideItm>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Dots className="dots">
                    {CONTENT.map((dot, idx) => {
                        return (
                            <li className={num === idx && 'on'} onClick={() => { MainSlideRef.current.swiper.slideTo(idx + 1) }}></li>
                        )
                    })}
                </Dots>
                <Arrows>
                    <i className='xi-arrow-right'
                        onClick={() => MainSlideRef.current.swiper.slideNext()}></i>
                </Arrows>
                <SlideNum>
                    0{num + 1} / <span>0{CONTENT.length}</span>
                </SlideNum>
                <div className="talk">
                    <img src={process.env.PUBLIC_URL + "/assets/img/slogan.png"} />
                </div>
            </div>
        </section>
    )
}

export default MainVisual