import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchStream } from '../../actions/'

const StreamShow = ({ fetchStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id)
  }, [fetchStream, match.params.id])

  if (!stream) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h4>{stream.description}</h4>
    </div>
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
  { fetchStream }
)(StreamShow)
// const NodeMediaServer = require('node-media-server');
