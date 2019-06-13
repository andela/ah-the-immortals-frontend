import React, { Component } from 'react';
import '../styles/App.css';

const imageStyle = {
  height: ' auto',
  width: '90%',
  display: 'block',
  margin: '0 30px 15px',
};

class Articles extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="tags-box">
          <p>Recent</p>
        </div>
        <div className="article">
          <button type="button" className="btn btn-light" data-toggle="modal" data-target=".bd-example-modal-xl">
            Start a post
          </button>
          <div className="card border-primary mb-3">
            <div className="card-body">
              <div className="card-title">
                <h1>Andela Asset Tags</h1>
                <h6 className="card-subtitle text-muted">
                  We (Finance team) are currently conducting an asset verification exercise with each department /cohort to ensure that we clearly tag laptops belonging to Andela.
                </h6>
              </div>
            </div>
            <div className="card-body user-details">
              <img src="https://img.icons8.com/ios/50/000000/user-male-circle-filled.png" alt="avatar" className="  rounded-circle img-responsive " />
              <div className="details">
                <p className="user-details-name">Mary</p>
              </div>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle text-muted">
                We (Finance team) are currently conducting an asset verification exercise....
              </h6>
            </div>
          </div>

          <div
            className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog"
            aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <h1>testing dude</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="tags-box" />
      </div>
    );
  }
}

export default Articles;
