/**
 * higherorder.js
 * Adds an extra prop "myprecious" to the component parameter
 * Testing higher order components (hoc) pattern
 */

'use strict'

// Bare component #1
class Square extends React.Component {
  render() {
    return (
      <div className="Quadrilateral">
        {this.props.label}
      </div>
    )
  }
}

// Bare component #2
class Rectangle extends React.Component {
  render() {
    return (
      <div className="Quadrilateral" style={{width:'300px'}}>
         {this.props.label}
         <h4>Data from HOC</h4>
         {this.props.myprecious}
      </div>
    )
  }
}

// HOC function
function styledQuad(WrappedComponent) {
  class Styled extends React.Component {
    render() {
      return <WrappedComponent myprecious={[1,2,3,4,5]} {...this.props} />
    }
  }

  return Styled
}

// HOC'ed component
const StyledRectangle = styledQuad(Rectangle)

class AppContainer extends React.Component {
  render() {    
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <h2>HOC</h2>
          <Square label="A" />
          <Rectangle label="B" />
          <StyledRectangle label="C" />
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}