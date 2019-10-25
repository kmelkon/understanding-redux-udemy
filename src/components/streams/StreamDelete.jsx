import React, { useEffect } from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { deleteStream, fetchStream } from '../../actions/'

const StreamDelete = ({ history, match, deleteStream, fetchStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id)
  }, [fetchStream, match.params.id])

  const renderActions = () => {
    return (
      <>
        <button className='ui button' onClick={() => history.push('/')}>
          Cancel
        </button>
        <button className='ui button negative' onClick={() => deleteStream(match.params.id)}>
          Delete
        </button>
      </>
    )
  }

  const renderContent = () => {
    if (!stream) {
      return 'you sure you wanna delete this stream?'
    }

    return `you sure you wanna delete this stream with title: ${stream.title}?`
  }

  return (
    <Modal
      title={`Delete Stream`}
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push('/')}
    />
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
  { deleteStream, fetchStream }
)(withRouter(StreamDelete))
