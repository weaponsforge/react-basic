/**
 * functioncomponents.js
 * User sign-in form that uses function to create react components.
 * Experiments for react's functions as components.
 * Also tests "useState" and batch input form object data updating.
 */

function AppContainer() {
  const [form, setForm] = React.useState({ username: '', password: ''})
  const [count, setCount] = React.useState(0)

  // Hook for "componentDidUpdate"
  React.useEffect(() => {
    console.log(`count was updated: ${count}`)
    document.title = count

    // Clean-up function to be called after every "useEffect" and during "componentWillUnmount"
    return () => {
      console.log('cleaning up...')
    }
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setForm({...form, [id]: value })
    setCount(count + 1)
  }

  const onSubmit = () => {
    alert(`username: ${form.username}\npassword: ${form.password}`)
  }

  return (
    <div className="AppContainer">
      <div className="AppContainer-elements">
        <h2>Function Components</h2>

        <form autocomplete="off" action="#">  
          <label>Username</label>
          <input type="text" id="username" onChange={handleInputChange} />

          <label>Password</label>
          <input type="text" id="password" onChange={handleInputChange} />
          <button onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

const loadApp = function() {
  ReactDOM.render(<AppContainer />, document.querySelector('#root'))
}