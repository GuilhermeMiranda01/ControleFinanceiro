import React from 'react'
import '../App.css';
import carteira from '../assets/carteira.png'

const Header = () => {
  return (
    <div>
        <div className="header">
            <img src={carteira} alt="asdsa" />
        </div>
    </div>
  )
}

export default Header