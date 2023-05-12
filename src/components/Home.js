import React from 'react'
import './home.css'
import ResponsiveAppBar from './Topmenu';
import Header from './Header';
import Moviebox from './Moviebox';

export default function Home() {
  return (
    <div className='home'>
      <ResponsiveAppBar/>
      <Header/>
      <Moviebox/>
    </div>
  )
}
