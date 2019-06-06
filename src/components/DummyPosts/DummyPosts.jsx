import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class DummyPost extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container">
          <br />
          <div className="row">
            <div className="col">
              <div className="list-group">
                <Link to="#null" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Es6 and beyond</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small>Donec id elit non mi porta.</small>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Async await</h5>
                    <small className="text-muted">1 day ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Baba yaga</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Lorem Ipsum is simply deen the industrys standard dummy text ever since the 1500s, when an unk diam eget risus varius blandit.</p>
                  <small>Donec id elit non mi porta.</small>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">2 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non miLorem ince the 1500s, when an unkndiam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">It is okay to cry</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small>Donec id elit non mi porta.</small>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">It has survived not only five centuries, but also the leap into electroMaecenas sed diam eget risus varius blandit.</p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DummyPost;
