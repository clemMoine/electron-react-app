import React from 'react'

// Libraries
import ReactDOM from 'react-dom'
import App from 'Containers/App'
import registerServiceWorker from 'Services/registerServiceWorker'

// Ant Design
import { LocaleProvider } from 'antd'
import frFR from 'antd/lib/locale-provider/fr_FR'

ReactDOM.render(
  <LocaleProvider locale={frFR}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
)
registerServiceWorker()
