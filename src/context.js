/**
 * context.js
 * Experiments on using React context providers
 */

'use strict'

// Create a context
const ThemeContext = React.createContext('light')
const ServerContext = React.createContext('light')

class AppContainer extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <div className="AppContainer">
          <div className="AppContainer-elements">
            <h2>Context</h2>
            <FormInputText placeholder="Code No." />
            <FormButton text="Submit" />
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}

// Input
class FormInputText extends React.Component {
  static contextType = ThemeContext
  render() {
    const type = (this.props.type) ? this.props.type : 'text'
    console.log(this.context)
    return (
      <input className={`Theme-${this.context}`} 
        type={type} 
        placeholder={this.props.placeholder} />
    )
  }
}

// Assign a Context directly to the Class
// FormInputText.contextType = ServerContext

// Button
class FormButton extends React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <button className={`Theme-${this.context}`}>{this.props.text}</button>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}