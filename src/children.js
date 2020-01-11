/**
 * children.js
 * Renders a Registration form UI.
 * Experiments on reusable Components as child elements.
 */

'use strict'

// Input
class FormInputText extends React.Component {
  render() {
    const type = (this.props.type) ? this.props.type : 'text'
    return (
      <input className={this.props.classname} type={type} placeholder={this.props.placeholder} />
    )
  }
}

// Button
class FormButton extends React.Component {
  render() {
    return (
      <button>{this.props.text}</button>
    )
  }
}

class MyForm extends React.Component {
  render() {
    return (
      <div className="MyForm">
        <div className="MyForm-elements">
          <h2>{ this.props.title }</h2>
          <FormInputText classname="MyForm-username" placeholder="Username"/>
          <FormInputText classname="MyForm-password" placeholder="Password" type="password" />
          <FormInputText classname="MyForm-password" placeholder="Confirm Password" type="password" />
          <FormButton classname="MyForm-button-send" text="Send" />
        </div>
      </div>
    )
  }
}

const myform = <MyForm title="Registration Form" />
const loadForm = function() {
  ReactDOM.render(myform, document.querySelector('#root'))
}