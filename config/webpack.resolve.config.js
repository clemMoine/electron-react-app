const path = require('path')
const src = '../src'

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, `${src}/Components/`),
      Containers: path.resolve(__dirname, `${src}/Containers/`),
      Navigation: path.resolve(__dirname, `${src}/Navigation/`),
      Redux: path.resolve(__dirname, `${src}/Redux/`),
      Resources: path.resolve(__dirname, `${src}/Resources/`),
      Sagas: path.resolve(__dirname, `${src}/Sagas/`),
      Services: path.resolve(__dirname, `${src}/Services/`),
      Theme: path.resolve(__dirname, `${src}/Theme/`),
      Variables: path.resolve(__dirname, `${src}/Theme/Variables`),
      Fonts: path.resolve(__dirname, `${src}/Theme/Fonts`),
      Images: path.resolve(__dirname, `${src}/Images/`),
      Data: path.resolve(__dirname, `${src}/Data/`),
      Config: path.resolve(__dirname, `${src}/Config/`)
    }
  }
}
