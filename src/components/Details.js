import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import covers from './Covers';
import '../css/Details.css';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: {}
        }
    }

    componentDidMount() {
       this.setState({
            cover: covers.find((cover) => {
                return cover.id === this.props.match.params.details
            })
       })
    }

    render() {
        return (
            <div>
                <h1 className='heading'>{this.state.cover.title}</h1>
                <img src={this.state.cover.image} />
                <h3>{this.state.cover.message}</h3>
                
                <Link to='/'>Back to Home page</Link>
            </div>
        );
    }
}
export default Details;