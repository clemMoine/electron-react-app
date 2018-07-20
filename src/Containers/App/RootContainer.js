import React, { Component } from 'react'

// Libraries
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import { get } from 'lodash'

// Config
import ReduxPersist from 'Config/ReduxPersist'

// Actions
import StartupActions from 'Redux/StartupRedux'

// Components
import NavigationRouter from 'Navigation/NavigationRouter'

class RootContainer extends Component {
  static propTypes = {
    startup: PropTypes.func,
    started: PropTypes.bool
  }

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
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

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
