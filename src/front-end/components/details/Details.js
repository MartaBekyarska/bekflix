import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import covers from '../covers/Covers';
import '../../css/Details.css';

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
                <div className="details">
                    <div className='heading'>
                        <h1>{this.state.cover.title}</h1>
                    </div>
                    <div className='contain image'>
                        <img src={this.state.cover.image} alt='tvShow' />
                    </div>
                    <div className='contain synopsis'>
                        <h3>{this.state.cover.synopsis}</h3> 
                        <div className='creator'>
                            <h3>{this.state.cover.creator}</h3>
                        </div>
                        <div className='stars'>
                            <h3>{this.state.cover.stars}</h3>
                        </div>
                    </div>
                    <div className='link'><Link to='/'>Back to Home page</Link></div>

                </div>
            );
        }
    }
}
export default Details;