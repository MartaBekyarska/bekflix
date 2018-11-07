import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                message: "Hello, this will be the details page for each Movie & TV show :)"
            });
        }, 3000);
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Link to="/">Back to Home page</Link>
            </div>
        );
    }
}
export default Details;