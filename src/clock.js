/**
 * clock.js
 * Renders (3) clocks that display real-time current time in seconds
 * Experiments for React state and lifecycle.
 * Self-updates the initial state "date" to the current time.
 */

'use strict'

// Clock
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0
    }
  }

  componentDidMount() {
    console.log('was mounted!')
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    console.log(`destroying timer ${this.timerId}...`)
    clearInterval(this.timerId)
  }

  tick() {
   this.setState((state, props) => ({
      date: new Date(),
      counter: state.counter + props.increment
    }))
  }

  render() {
    return (
      <div class="Clock">
        <div className="Clock-elements">
          <h2>Time now is:</h2>
          { this.state.date.toLocaleTimeString() }

          <h2>Count</h2>
          { this.state.counter }
        </div>
      </div>
    )
  }
}

// function tick
// Renders the whole element
const tick = function() {
  const clock = (
    <div class="Clock">
      <div className="Clock-elements">
        <h2>Time now is:</h2>
        { new Date().toLocaleTimeString() }
      </div>
    </div>
  )
  
  ReactDOM.render(clock, document.querySelector('#root'))
}

const reactTick = function() {
  ReactDOM.render(
    <Clock increment={1} />,
    document.querySelector('#root')
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock increment={1} />
        <Clock increment={2} />
        <Clock increment={3} />
      </div>
    )
  }
}

const loadApp = function() {
  // setInterval(reactTick, 1000)
  ReactDOM.render(<App />, document.querySelector('#root'))
}