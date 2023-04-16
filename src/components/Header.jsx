import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='border'></div>
        <img className='header__background' src='./photos/pattern.png' alt=''/>
        <img className='title__name' src="./photos/rm-logo.png" alt="" />
        <img className='title__photo' src="./photos/rm2.jpg" alt="" />
        <img className='title__photo2' src="./photos/rm1.png" alt="" />
    </header>
  )
}
 
export default Header