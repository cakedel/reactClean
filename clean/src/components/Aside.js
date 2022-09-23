import React from 'react'
import NavMenu from './NavMenu'

const Aside = () => {
    return (
        <aside>
            <div className="asideLnb">
                <NavMenu />
            </div>
            <div className="sideCustomer">
                <img src={process.env.PUBLIC_URL + '/assets/img/slogan.png'} />
                <strong>전화문의 051-331-3354</strong>
                <hr />
                <span>e-mail : jjs3354@naver.com</span>
            </div>
        </aside>
    )
}

export default Aside