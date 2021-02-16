import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <div className="header">
      <h1>
        {title}
      </h1>
      <Button text={!showAdd ? 'Add' : "Close"} link="#" color={!showAdd ? "green" : 'red'} onClick={onAdd} />
    </div>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

export default Header
