import React from 'react'
import './Search.css'

export default function Search({value, placeholder, onInputChange}) {
  return (
    <form className='search'>
        <img src='./assets/icon-search.svg' alt=''></img>
        <input type='search' value={value} placeholder={placeholder} onChange={onInputChange}></input>
    </form>

  )
}