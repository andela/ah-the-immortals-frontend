import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../Article/Spinner';
import { getReports,deleteReport } from '../../redux/actions/postActions';

class ReportsContainer extends Component {
  componentDidMount() {
    const { getReports } = this.props;
    getReports();
  }
  onDeleteClick = (slug) => {const { history, deleteReport } = this.props;if (window.confirm('Delete This article?')) {deleteReport(slug);history.push('/');}}
  render() {
    const { post: { loading } } = this.props;
    const { post: { AllReports } } = this.props;
    return (
      <div>
        <br />
        <br />
        <h1 className="text-center">Reports</h1>
        <br />
        <table className="table table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Article Title</th>
              <th scope="col">Reason</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {
            (!AllReports['escalated articles'].length || loading) ? loading : (
              AllReports['escalated articles'].length ? AllReports['escalated articles'].map((item, index) => (

                <tbody key={`${index + 1}`}>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.article.title}</td>
                    <td>{item.reason}</td>
                    <td>{item.description}</td>
                    <td>
                      <Link to="#null">
                        <i className="fa fa-trash fa-1x" onClick={() => this.onDeleteClick(item.article.slug)} aria-hidden="true"> Delete</i>
                          
                      </Link>
                    </td>
                  </tr>
                </tbody>

              )) : null
            )}
        </table>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

ReportsContainer.propTypes = {
  getReports: PropTypes.func.isRequired,
  deleteReport:PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getReports,deleteReport })(ReportsContainer);
