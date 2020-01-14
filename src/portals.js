/**
 * portals.js
 * React experiments for DOM portals
 *  - portal creation and structure
 *  - bubbling events through portals
 */

'use strict'

let modalRoot

// Portal component
class FloatingFrame extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.el.setAttribute('class', 'FloatingFrame')
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

// Child for the Portal component, no defined onClick
function ButtonChild(props) {
  return (
    <button>Press Mee</button>
  )
}

// Parent container
class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    alert('PORTALS parent component was clicked')
  }

  render() {
    return (
      <div className="AppContainer" onClick={this.handleClick}>
        <div className="AppContainer-elements">
          <br />
          <br />
          <h2>Portals</h2>
          <p>Regular content</p>
        </div>

        <FloatingFrame>
          <h3>FloatingFrame Portal</h3>
          <ButtonChild/>
        </FloatingFrame>        
      </div>
    )
  }
}

const loadApp = function() {
  modalRoot = document.querySelector('#modal-root')
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}