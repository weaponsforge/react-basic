/**
 * lists.js
 * Experiments on Lists and Keys usage.
 */

'use strict'

function ListItem(props) {
  return <li>{ props.value }</li>
}

class AppContainer extends React.Component {
  render() {
    const a = [1, 2, 3, 4, 5]
    return (
      <div className="AppContainer">
        <div className="AppContainer-elements">
          <ul>
            {a.map(x => 
              <ListItem key={x.toString()} value={x} />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

const loadApp = function() {
  ReactDOM.render(
    <AppContainer />, 
    document.querySelector('#root'))
}