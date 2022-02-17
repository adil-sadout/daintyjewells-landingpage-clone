import React from 'react'
import {NavLink} from "react-router-dom"
function MainNavbar() {
  return (

        <div className='d-flex m-auto h5 d-flex list-unstyled justify-content-center'>
            <NavLink to="" className="p-2 mx-2">first</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">page1</NavLink>
            <NavLink to="" className="p-2 mx-2">last</NavLink>
        </div>
  )
}

export default MainNavbar