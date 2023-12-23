import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
        <NavLink to= "/">home</NavLink>
        <NavLink style={{marginLeft:"10px"}} to= "/demo">demo</NavLink>
        <NavLink style={{marginLeft:"10px"}} to= "/api">Api</NavLink>
        <NavLink style={{marginLeft:"10px"}} to= "/dashboard">Dashboard</NavLink>
    </div>
  )
}

export default Header
