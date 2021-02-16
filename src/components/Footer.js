import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <footer>
        <p>Copyright &copy; {year}</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  )
}

export default Footer
