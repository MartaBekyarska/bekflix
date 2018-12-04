import React from 'react';
import '../app/App.css';
import CoverComponent from '../cover/Cover';
import covers from '../covers/Covers';

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      covers: []
    }

  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then((covers) => {
        console.log(covers);
        this.setState({ covers });
      });
  }

  render() {
    return (
      <div className='container'>
        {
          covers.map(function (cover) {
            return <CoverComponent
              id={cover.id}
              title={cover.title}
              image={cover.image}
              message={cover.message} />;
          })
        }
      </div>

    );
  }
}
export default Gallery;