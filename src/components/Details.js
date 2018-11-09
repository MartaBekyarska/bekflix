import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import covers from './Covers';
import '../css/Details.css';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: {},
            notFound: false
        }
    }




    componentDidMount() {
        let cover = covers.find((cover) => {
            return cover.id === this.props.match.params.details
        })
        if (!cover) {
            this.setState({
                notFound: true
            });

        } else {
            this.setState({
                cover: cover
            })
        }
    }

    render() {
        if (this.state.notFound) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div>
                    <h1 className='heading'>{this.state.cover.title}</h1>
                    <img src={this.state.cover.image} alt='tvShow' />
                    <h3>{this.state.cover.message}</h3>

                    <Link to='/'>Back to Home page</Link>
                </div>
            );
        }
    }
}
export default Details;