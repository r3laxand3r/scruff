import React from 'react'
import { Link } from 'gatsby'

const Header = (props) => (
  <header id="header" className="alt">
      <span className="logo"></span>
      <Link to="/">
      <h1>Snuffle</h1>
      </Link>
      <p>Short description about us. </p>
  </header>
)

export default Header
