/**
 * forms.js
 * Experiments on creating react forms
 * Contains various (and updated) styled form elements
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

// TextArea
class FormTextArea extends React.Component {
  render() {
    return (
      <div>
        <span className="FormInputText-label">{this.props.label}</span>
        <textarea className="FormTextArea" 
          value={this.props.value} 
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange} />        
      </div>
    )
  }
}

// Button
class FormButton extends React.Component {
  render() {
    return (
      <input className="Submit" type="submit" 
        value={this.props.text} 
        onChange={this.props.onChange} />
    )
  }
}

// Select
class FormSelect extends React.Component {
  render() {
    return (
      <div>
        <span className="FormInputText-label">{this.props.label}</span>
        <select className="FormSelect" name={this.props.name}
          value={this.props.value} onChange={this.props.onChange}>
          {this.props.items.map(x => 
            <option value={x}>{x}</option>)}
        </select>
      </div>
    )
  }
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleMultipleEvents = this.handleMultipleEvents.bind(this)
    this.state = {
      name: '',
      description: '',
      dog: ''
    }
  }

  handleSubmit(e) {
    console.log(`Name: ${this.state.name}`)
    console.log(`Description: ${this.state.description}`)
    console.log(`Doggie: ${this.state.dog}`)
    e.preventDefault()
  }

  handleChange(e) {
    this.setState({ name: e.target.value.toUpperCase() })
  }

  handleTextAreaChange(e) {
    this.setState({ description: e.target.value })
  }

  handleSelect(e) {
    this.setState({ dog: e.target.value })
  }

  handleMultipleEvents(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })   
  }

  render() {
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <h2>React Form Elements</h2>
          <form onSubmit={this.handleSubmit} >
            <FormInputText placeholder="Username" type="text" name="name"
              onChange={this.handleMultipleEvents} 
              label="Username:" />
            <FormTextArea placeholder="Description" name="description"
              onChange={this.handleMultipleEvents} 
              label="Description:" />
            <FormSelect value={this.state.dog} name="dog"
              items={['', 'brownie','puppy','milky','parita','gerry']}
              label="Cute Doggo:" 
              onChange={this.handleMultipleEvents} 
              multiple={true}/>
            <FormButton text="Submit" value={this.state.name} />
          </form>
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}