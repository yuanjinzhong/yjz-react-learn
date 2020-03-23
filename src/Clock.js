import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timeTaskId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeTaskId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    clickMe() {
        alert("点击我了")
    }

    render() {
        return (
            <div>
                <h1 onClick={this.clickMe}>hello word</h1>
                <h2>current time is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;
