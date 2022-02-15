import React from 'react'
import '../Styles/global.css'
import Header from './subComponents/Header'

export default function Layout({children}) {
  return (
    <div className='container'>
        <div className='header'><Header/></div>
        <div className='content'>{children}</div>
        <div className='footer'>Resume Builder</div>
    </div>
  )
}
