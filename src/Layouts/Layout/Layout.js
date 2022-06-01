import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import './Layout.css'

export default function Layout() {
  return (
    <div className='layout'>
        <Nav />
        <div className='page-container'>
            <Outlet />
        </div>
    </div>
  )
}
