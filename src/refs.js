/**
 * refs.js
 * Experiments on (regular) react refs and the DOM
 * Ref forwarding has an example usage on "forwardref.js"
 */

'use strict'

// Button
class FormButton extends React.Component {
  render() {
    return (
      <button>{this.props.text}</button>
    )
  }
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.componentRef = React.createRef()
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleFocusOut = this.handleFocusOut.bind(this)
  }

  handleClick() {
    console.log('was clicked')
    console.log(this.myRef.current)
    this.myRef.current.focus()
  }
  
  handleFocus(e) {
    console.log('was focused')
    this.myRef.current.style.border = '1px solid green'
  }

  handleFocusOut() {
    console.log('out')
    this.myRef.current.style.border = '1px solid rgb(192, 201, 207)'
  }

  render() {
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <h2>Refs and DOM</h2>
          <input type="text" ref={this.myRef} 
            onFocus={this.handleFocus} 
            onBlur={this.handleFocusOut} />
          <button onClick={this.handleClick}>Click to Focus</button>
          <FormButton 
            text="Component Button" />
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}