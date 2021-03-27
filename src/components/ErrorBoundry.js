import React, { Component} from "react";


class ErrorBoundry extends Component {

	constructor(props) {
		super();
		this.state = { hasError:false }
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render () {
		if (this.state.hasError === false) {
			return(
				this.props.children
			)	
		} else {
			return <h1>Hellooo</h1>
		}
		
	}
}




export default ErrorBoundry;