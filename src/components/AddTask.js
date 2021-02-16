import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a task')
      return
    } else if(!day) {
      alert('Day and Time should not be empty')
    }

    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Add Task</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Create your task"/>
      </div>

      <div className="form-control">
        <label htmlFor="">Day &amp; Time</label>
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Feb 10th 2021, 10:00am" />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder?</label>
        <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}/>
      </div>

      <div className="form-control">
        <input type="submit" value="Save task" className="btn btn-block"/>
      </div>
    </form>
  )
}

export default AddTask
