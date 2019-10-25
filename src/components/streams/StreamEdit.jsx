import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { editStream, fetchStream } from '../../actions/'
import StreamForm from './StreamForm'

const StreamEdit = ({ match, stream, fetchStream, editStream }) => {
  const { params } = match

  useEffect(() => {
    fetchStream(params.id)
  }, [fetchStream, params.id])

  const onSubmit = formValues => {
    console.log(formValues)
    editStream(params.id, formValues)
  }

  if (!stream) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h2>Edit {stream.title}</h2>
      <StreamForm onSubmit={onSubmit} initialValues={_.pick(stream, 'title', 'description')} />
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps

  return { stream: state.streams[id] }
}

export default connect(
  mapStateToProps,
  { editStream, fetchStream }
)(StreamEdit)
