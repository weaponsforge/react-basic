/**
 * forwardref.js
 * React experiments for forwarding refs
 */

'use strict'

class MyButton extends React.Component {
  render() {
    return (
      <button className="MyButton">
        Click Me
      </button>
    )
  }
}

// DOM element set with forwarded ref
const RefButton = React.forwardRef((props, ref) => (
  <button className="RefButton" ref={ref}>
    {props.children}
  </button>
))

// Create a ref and pass to a DOM button
const ref = React.createRef()
const btn = <RefButton ref={ref} test="hello">Press Me</RefButton>
const btnNormal = <MyButton />

// Higher order component sample
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

class AppContainer extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <h2>Forwarding Ref</h2>
          {btn}
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}