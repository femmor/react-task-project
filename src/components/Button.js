import React from 'react'
import PropTypes from "prop-types"

const Button = ({ text, link, color, onClick }) => {
  return (
    <button className="btn" style={{
      backgroundColor: color
    }} href={link} onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
