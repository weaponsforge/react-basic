/**
 * buttonstate.js
 * Toggles the login/logout button.
 * Experiments on conditional element rendering.
 * Passes parent event handler as onClick "props" to its child elements.
 */

'use strict'

function ButtonLogin(props) {
  console.log(props)
  return (
    <button className="ButtonLogin" onClick={props.onClick}>Login</button>
  )
}

function ButtonLogout(props) {
  return (
    <button className="ButtonLogout" onClick={props.onClick}>Logout</button>
  )
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  handleClick() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }))
  }

  render() {
    const buttonElement = (this.state.isLoggedIn) ? 
      <ButtonLogout onClick={this.handleClick} /> :
      <ButtonLogin onClick={this.handleClick} />

    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          { buttonElement }
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}