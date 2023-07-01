import React, {Component} from 'react'
class CounterClass extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
    }

    render() {
        return (
            <div>
            <h1>Counter: {this.state.counter}</h1><br/>
            <button onClick={()=> this.setState({counter: this.state.counter +1})}>Click!</button>
        </div>
        )
    }
}

export default CounterClass;