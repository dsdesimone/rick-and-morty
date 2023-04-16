import React from 'react'
import './styles/backgroundAnimation.css'

const BackgroundAnimation = () => {
  return (
    <div className='animated__background'>
        <span class="one delay-1"><i class="fa-solid fa-flask"></i></span>
        <span class="two"><i class="fa-solid fa-vial"></i></span>
        <span class="three delay-5"><i class="fa-solid fa-rocket"></i></span>
        <span class="four delay-1"><i class="fa-solid fa-gun"></i></span>

        <span class="two delay-3"><i class="fa-solid fa-flask"></i></span>
        <span class="three delay-7"><i class="fa-solid fa-vial"></i></span>
        <span class="four delay-5"><i class="fa-solid fa-rocket"></i></span>
        <span class="one delay-4"><i class="fa-solid fa-gun"></i></span>

        <span class="four delay-2"><i class="fa-solid fa-flask"></i></span>
        <span class="one delay-3"><i class="fa-solid fa-vial"></i></span>
        <span class="two delay-6"><i class="fa-solid fa-rocket"></i></span>
        <span class="three delay-3"><i class="fa-solid fa-gun"></i></span>
    </div>
  )
}

export default BackgroundAnimation