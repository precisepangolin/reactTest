import React, {Component} from 'react'
class BlogPost extends Component {
    constructor() {
        super()
        this.state = {
            counter : 0,
            limit : 10,
            errors: [],
            message : ""
        }
    }

    validateAboveLimit(characterCount) {
        if (characterCount <= this.state.limit) {
            return `Must have over ${this.state.limit} characters`
        }
    }
    validateCharacterCount(event) {
        const characterCount = event.target.value.length
        const message = this.state.message
        console.log(characterCount)
        var validate_result = this.validateAboveLimit(characterCount)
        if (validate_result) {
            console.log(validate_result)
            this.setState({message:validate_result})
        }
        this.setState({message:validate_result})
        this.setState({counter:event.target.value.length})
        this.setState({characterCount, message})
        
    }

    displayErrors() {
        {
            console.log(this.state.message)
        return (
            <div>
                {this.state.message}
            </div>
        )
        }
    }

    render() {
        return (
            <div>
                <h1>Blog Post Writer</h1>
                <hr/>
                <h2>Write your post here</h2>
                <div name = "ErrorsDisplay"></div>
                {this.displayErrors()}<br/>
                {this.state.message}
                <textarea onBlur={this.validateCharacterCount.bind(this)}></textarea>
            <h2>{this.state.counter} characters</h2>
            <button>Submit</button>
        </div>
        )
    }
}

export default BlogPost;