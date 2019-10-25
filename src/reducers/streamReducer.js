import _ from 'lodash'

import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
} from '../actions/types'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload }

    case CREATE_STREAM:
      return { ...state, [payload.id]: payload }

    case DELETE_STREAM:
      return _.omit(state, payload)

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') }

    case EDIT_STREAM:
      return { ...state, [payload.id]: payload }

    default:
      return state
  }
}
