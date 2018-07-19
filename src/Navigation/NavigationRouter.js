import React, { Component } from 'react'

// Libraries
import { HashRouter as Router, Route } from 'react-router-dom'

// Routes
import { Stack } from 'Navigation/Routes'

class NavigationRouter extends Component {
  /**
   * Rendering d'un item du menu
   * @param routes
   * @return {*}
   */
  _renderRoutes(routes, location) {
    return routes.map((route, index) => (
      <div key={index} className="wrapper">
        <Route {...route} exact />
      </div>
    ))
  }

  _flattenRoutes = array => {
    var result = []

    array.forEach(a => {
      result.push(a)

      if (Array.isArray(a.routes)) {
        result = result.concat(this._flattenRoutes(a.routes))
      }
    })

    return result
  }

  render() {
    const routes = this._flattenRoutes(Stack)

    return (
      <Router>
        <div className="navigation-router">
          <Route
            path="/"
            render={props => {
              return (
                <div className="flex-container-h" style={{ height: '100%' }}>
                  <div className="flex-item-fluid">
                    {this._renderRoutes(routes, props.location)}
                  </div>
                </div>
              )
            }}
          />
        </div>
      </Router>
    )
  }
}

export default NavigationRouter
