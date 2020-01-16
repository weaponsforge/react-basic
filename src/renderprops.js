/**
 * renderprops.js
 * Display a container div that renders whatever is passed in its render prop.
 * Experiments for react's render props
 */

'use strict'

class Frame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Frame">
        {this.props.render()}
      </div>
    )
  }
}

class Square extends React.Component {
  render() {
    return (
      <div className="Square">{this.props.myData}</div>
    )
  }
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 50,
      y: 50
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <h2>Render Props</h2>
          <Frame render={() => (
            <Square myData={[1,2,3]}/>
          )} />
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}