import React from 'react'

const Footer = ({ content }) => {
  return (
    <footer className='Footer'>
      <address>
        {content.address}
      </address>
      <ul className="ftCon">
        <li>{content.ceo}</li>
        <li>{content.number}</li>
        <li>{content.tel}</li>
        <li>{content.email}</li>
      </ul>
      <span>&copy;{content.name} All Rights Reserved.</span>
    </footer>
  )
}

export default Footer