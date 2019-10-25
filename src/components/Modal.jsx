import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'

const Modal = ({ history, title, content, actions }) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className='ui dimmer modals visible active'>
      <div onClick={event => event.stopPropagation()} className='ui standard modal visible active'>
        <div className='header'>{title}</div>
        <div className='content'>{content}</div>
        <div className='actions'>{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default withRouter(Modal)
