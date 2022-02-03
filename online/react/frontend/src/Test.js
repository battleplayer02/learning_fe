import React, { Component } from 'react';

export default class Test extends Component {
    // how to declare a state 
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
        // this.handelClick = 
        this.handelClick.apply(this); 

        // calls the function
    }
    handelClick = function () {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handelClick}>+</button>
                <br />
                count:{this.state.count}<br />
                a:{this.props.a}<br />
                <button>-</button>
            </>
        )
    }
}
