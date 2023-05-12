import React from 'react'
import Headerimg from '../1115518.jpg'

export default function Header() {
  return (
    <div className='header'>
        <img src={Headerimg} style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
        }}/>
    </div>
  )
}
