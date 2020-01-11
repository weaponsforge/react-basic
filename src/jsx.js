const formatUser = function(name) {
  return `Hello, ${name}!`
}

const name = 'Puppy'
const h1 = <h1>{formatUser('Puppy')}</h1>

const imgSrc = 'mangekyo.png'
const img = <img src={imgSrc} />

const nested = (
  <div>
    <h1>Hello, World!</h1>
    <p>This is a sample paragraph</p>
  </div>
)

// Clock tick sample
const tick = function() {
  const clock = (
    <div>
      <h2>Clock Sample</h2>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(clock, document.getElementById('root'))
}

const loadJSX = function() {
  // ReactDOM.render(tick, document.getElementById('root'))
  setInterval(tick, 1000)
}