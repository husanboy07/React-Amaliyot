import React from 'react'
function navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="image/HelloUI.png" alt="" />
        <a href="#" className='Docs'>Docs</a>
        <a href="#">Tools</a>
        <a href="#">Freatures</a>
        <a href="#">Pricing</a>
        <a href="#">Jobs</a>
        <a href="#">Sign in</a>
        <button>Try for Free</button>
    </div>
  )
}

export default navbar