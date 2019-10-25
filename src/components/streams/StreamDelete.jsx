import React from 'react'
import Modal from '../Modal'

const StreamDelete = () => {
  const actions = (
    <>
      <button className='ui button'>Cancel</button>
      <button className='ui button negative'>Delete</button>
    </>
  )
  return (
    <div>
      <Modal title='Delete Stream' content='you sure?' actions={actions} />
    </div>
  )
}

export default StreamDelete
