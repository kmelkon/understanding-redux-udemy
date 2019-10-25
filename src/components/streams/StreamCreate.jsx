import React from 'react'
import { connect } from 'react-redux'

import { createStream } from '../../actions'
import StreamForm from './StreamForm'

// the component
const StreamCreate = ({ createStream }) => {
  const onSubmit = formValues => {
    createStream(formValues)
  }

  return (
    <>
      <h2>Create a Stream</h2>
      <StreamForm onSubmit={onSubmit} />
    </>
  )
}

export default connect(
  null,
  { createStream }
)(StreamCreate)
