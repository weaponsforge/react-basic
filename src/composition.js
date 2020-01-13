/**
 * composition.js
 * Renders a greeting card with username provided using props.children
 * Experiments on react containment methods
 */

 'use strict'

 class GreetingCard extends React.Component {
   render () {
     return (
       <div className={`GreetingCard-${this.props.bgColor}`}>
        <h1>Happy Holidays!</h1>
        <p>May the joy and blessings of the Season be with you,</p>
        { this.props.children }
        { this.props.extra }
       </div>
     )
   }
 }

 class ColoredName extends React.Component {
   render() {
     return (
       <span>Extra message!</span>
     )
   }
 }


 class AppContainer extends React.Component {
   render() {    
     return (
       <div className="AppContainer">
        <div className="AppContainer-elements">
          <GreetingCard bgColor="yellow" extra={<ColoredName />} >
            <p>Brownie,</p>
          </GreetingCard>

          <GreetingCard bgColor="green">
            <p>Puppy</p>
            <div>
              <h5>Testing</h5>
            </div>
          </GreetingCard>          
        </div>
       </div>
     )
   }
 }

 const loadApp = function() {
  ReactDOM.render(<AppContainer/>, document.querySelector('#root'))
}