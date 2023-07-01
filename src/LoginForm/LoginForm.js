import React, { Component } from 'react'

// binding method 1 (in render return): Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />

// binding method 2 (in constructor): this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            passwordConfirmation: "",
            email: "",
            errors: []
        }
        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)
        this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this)
    }

    displayErrors() {
        return (
            <div>
                {this.state.errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
        )
    }

    validateNotEmpty(field, value) {
        if (value.length <= 0) {
            return `${field} must be filled out!`
        }
    }

    validateUsernameOnBlur(event) {
        console.log(event.target.value)
        const username = event.target.value
        const errors = this.state.errors
        var validate_result = this.validateNotEmpty("Username", username)
        if (validate_result) {
            this.setState({ username: "" })
            errors.push(validate_result)
        }
        //this.setState({username:event.target.value})
        this.setState({ username, errors })
        console.log(username, errors)
    }

    validatePasswordOnBlur(event) {
        console.log(event.target.value)
        const password = event.target.value
        const errors = this.state.errors
        var validate_result = this.validateNotEmpty("Password", password)
        if (validate_result) {
            this.setState({ password: "" })
            errors.push(validate_result)
        }
        this.setState({ password, errors })
        console.log(password, errors)
    }

    validatePasswordConfirmation(password, passwordConfirmation) {
        if(passwordConfirmation !== password)
        {
            return "Password must match!"
        }
    }

    validatePasswordConfirmationOnBlur(event) {
        const passwordConfirmation =  this.event.value
        const errors = this.state.errors
        let validate_result = this.validatePasswordConfirmation(this.state.password, passwordConfirmation)
        if (validate_result) {
            this.setState({passwordConfirmation: ""})
            if(!errors.includes(validate_result))
            {
                errors.push(validate_result)
            }

        }

        this.setState({ passwordConfirmation, errors })
        console.log(passwordConfirmation, errors)
    }

    render() {
        return (
            <div>
                <h1>Login form</h1>
                Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)} /><br />
                Password: <input type="text" onBlur={this.validatePasswordOnBlur.bind(this)}/><br />
                Password confirmation: <input type="text" onBlur={(event) => {this.validatePasswordConfirmationOnBlur(event)}} /><br />
                Email: <input type="text" /><br />
                <button>Submit</button><br />
                {this.displayErrors()}
            </div>
        )
    }
}

export default LoginForm;