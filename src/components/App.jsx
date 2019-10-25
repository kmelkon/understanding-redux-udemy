import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'
import configureStore, { history } from '../configureStore'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className='ui container'>
          <Header />
          <div>
            <Route exact path='/' component={StreamList} />
            <Route exact path='/streams/new' component={StreamCreate} />
            <Route exact path='/streams/edit/:id' component={StreamEdit} />
            <Route exact path='/streams/show/:id' component={StreamShow} />
            <Route exact path='/streams/delete/:id' component={StreamDelete} />
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
