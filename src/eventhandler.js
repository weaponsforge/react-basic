/**
 * eventhandler.js
 * Basic definition and usage of React event handlers.
 * Demonstrates the onClick event handler "handleClick"
 */

'use strict'

// Button
class ButtonEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isClicked: !state.isClicked
    }))

    console.log(`clicked! ${this.state.isClicked}`)
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="ButtonEvent">
          { this.props.btnName }
        </button>

        <br />
        <a className="ButtonEvent-link" href="https://google.com" target="blank">
          website link
        </a>        
      </div>
    )
  }
}

// Container
class AppContainer extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <ButtonEvent btnName="Click Me!" />
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}