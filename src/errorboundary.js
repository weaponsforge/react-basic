/**
 * errorboundary.js
 * Experiments for React's error boundary components
 */

'use strict'

// Input
class FormInputText extends React.Component {
  render() {
    const type = (this.props.type) ? this.props.type : 'text'
    return (
      <div>
        <span className="FormInputText-label">{this.props.label}</span>
        <input className="FormInputText" 
          type={type} placeholder={this.props.placeholder} 
          value={this.props.value} 
          name={this.props.name}
          onChange={this.props.onChange} />        
      </div>
    )
  }
}

// Button
class FormButton extends React.Component {
  render() {
    if (this.props.value === 2) {
      eval('(1 + 2 -3')
    }

    return (
      <input className="Submit" type="submit" 
        value={this.props.text} 
        onClick={this.props.onClick} />
    )
  }
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      value: 1,
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    console.log('---ERROR')
    console.log(error)
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('---ERROR INFO')
    console.log(errorInfo)
  }

  handleClick() {
    this.setState(state => ({
      value: state.value + 1
    }))
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="AppContainer">
          <div className="AppContainer-elements" style={{ textAlign: 'center' }}>
            <h2>Aw, something snaped @_@</h2>
          </div>
        </div>        
      )
    } else {
      return (
        <div className="AppContainer">
          <div className="AppContainer-elements">
            <h2>Error boundary</h2>
            <FormInputText placeholder="some text" />
            <FormButton onClick={this.handleClick} value={this.state.value} />
          </div>
        </div>
      )
    }
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}