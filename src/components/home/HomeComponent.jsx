import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HomePage from './HomeInfo';
import Posts from '../../views/Articles/Posts';
import PopularArticlesContainer from '../../views/Articles/PopularArticlesContainer';
import Articles from '../../views/Articles/ArticleDataContainer';

class Home extends Component {

  render = () => {
    return (
      <div>
        <div className="background">
          <Container className="homepage">
            <HomePage />
          </Container>
        </div>
        <div className="row">
          <div className="col"><Articles /></div>
          <div className="col">
            <Posts />
          </div>
          <div className="col mt-2"><PopularArticlesContainer /></div>
        </div>
      </div>
    );
  };
}


export default Home;
