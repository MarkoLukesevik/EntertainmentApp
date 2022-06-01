import React from 'react'
import './Content.css'

export default function Content( { title, renderAll } ) {
  return (
    <div className='content'>
        <h2>{title}</h2>
        <div className='content-items'>
            {renderAll()}
        </div>
    </div>
  )
}