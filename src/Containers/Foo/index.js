import React, { Component } from 'react'

// Images
import Images from 'Images'

// Styles
import './Styles/Foo.less'

// Libraries
import { Button, message } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="foo screen">
        <header>
          <img src={Images.logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React + Electron App</h1>
        </header>
        <main>
          <p className="intro">
            To get started, edit <code>src/Containers/Foo/index.js</code> and
            save to reload.
          </p>
          <div>
            <h2>Ant Design Integration</h2>
            <p>
              To modify Ant Design default color, edit{' '}
              <code>@primary-color</code> value in the{' '}
              <code>/config/index.js</code> file.
            </p>
            <Button
              type="primary"
              onClick={() => message.loading('Loading message..')}
            >
              Primary
            </Button>
            <Button onClick={() => message.warning('Warning message..')}>
              Default
            </Button>
            <Button
              type="dashed"
              onClick={() => message.info('Informative message')}
            >
              Dashed
            </Button>
            <Button
              type="danger"
              onClick={() => message.error('Error message')}
            >
              Danger
            </Button>
          </div>
        </main>
        <footer>
          <p>
            Made with <span style={{ color: 'red' }}>❤</span> by Ubidreams
          </p>
        </footer>
      </div>
    )
  }
}

export default App
