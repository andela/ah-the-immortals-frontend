import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HomePage from './HomeInfo';
import Posts from '../../views/Articles/Posts';
import TopRatedArticles from './TopRatedArticles';
import PopularArticles from './PopularArticlesComponent';

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
          <div className="col-md-3 mt-4"><TopRatedArticles /></div>
          <div className="col-md-6">
            <Posts />
          </div>
          <div className="col-md-3 mt-4"><PopularArticles /></div>
        </div>
      </div>
    );
  };
}


export default Home;
