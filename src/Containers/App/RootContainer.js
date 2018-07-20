import React, { Component } from 'react'

// Libraries
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import { get } from 'lodash'

// Components
import NavigationRouter from 'Navigation/NavigationRouter'

class RootContainer extends Component {
  static propTypes = {
    started: PropTypes.bool
  }

  render() {
    const { started } = this.props

    if (!started) {
      return (
        <div className="screen loader">
          <Spin tip="Chargement en cours..." />
        </div>
      )
    } else {
      return <NavigationRouter />
    }
  }
}

const mapStateToProps = state => {
  return {
    started: get(state, 'startup.started')
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
