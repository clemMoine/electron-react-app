import React from 'react'

// Libraries
import ReactDOM from 'react-dom'

// Containers
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
