/**
 * components.js
 * Experiments on React Components basic usage
 * Demonstrates "props" passing and functions that can return nested Components
 */

'use strict'

function Welcome(props) {
  return <h1>Hello, world! {props.name}</h1>
}

class Character extends React.Component {
  render() {
    return (
      <div className="Character">
        <h1 className="Character-name">Hello Character {this.props.name}!</h1>
        <h2>Is a {this.props.class} puppy</h2>        
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Character name="tarrent" class="wizard" />
      <Character name="hellios" class="knight" />
      <Character name="tarre" class="elf" />
    </div>
  )
}

const element = <Welcome name="Tapper" />
const classChar = <Character name="Brownie" class="brown" />

const loadComponent = function() {
  ReactDOM.render(<App/>, document.querySelector('#root'))
}