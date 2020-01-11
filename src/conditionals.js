/**
 * conditionals.js
 * Toggles the color of a div element to red/green onClick.
 * Experiments on conditional element derived from "state.color"
 * Mutates the current "state.color" onClick
 */

'use strict'

// Square
class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      isRed: (this.props.color === 'red')
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      color: state.isRed ? 'green' : 'red',
      isRed: !state.isRed
    }))
  }

  render() {
    const color = this.state.color === 'red' ? 'RedSquare' : 'GreenSquare'
    return (
      <div 
        onClick={this.handleClick}
        className={ color }></div>
    )
  }
}

class AppContainer extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <Square color='red' />
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}