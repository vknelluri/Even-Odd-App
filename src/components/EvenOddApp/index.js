import React, {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  incrementCount = () => {
    const randomValue = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className="container">
        <h1 className="count">Count {count}</h1>
        <p className="status">{isEven ? 'Count is Even' : 'Count is Odd'}</p>
        <button
          type="button"
          className="increment-button"
          onClick={this.incrementCount}
        >
          Increment
        </button>
      </div>
    )
  }
}

export default EvenOddApp
