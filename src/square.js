'use strict'

const e = React.createElement

class Square extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="square">
        A
      </div>
    )
  }
}

const loadSquare = function() {
  const domCntainer = document.querySelector('#square_container')
  ReactDOM.render(e(Square), domCntainer)
}