import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAVILINK = [
    { id: 1, tit: "깔끔이청소 소개", link: '/sub01' },
    { id: 1, tit: "아파트입주청소", link: '/sub02' },
    { id: 1, tit: "이사/상가청소", link: '/sub03' },
    { id: 1, tit: "사무실청소", link: '/sub04' },
    { id: 1, tit: "질문과 답변", link: '/board' },
]

const NavMenu = () => {
    return (
        <ul>
            {NAVILINK.map((list, idx) => {
                return (
                    <li key={idx}>
                        <NavLink to={list.link}>{list.tit}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavMenu