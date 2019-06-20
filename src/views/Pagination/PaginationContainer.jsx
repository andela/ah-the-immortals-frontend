import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPages } from '../../redux/actions/postActions';

class PaginationContainer extends Component {
  componentDidMount() {
    const { getPages } = this.props;
    getPages();
  }
  render() {
    const {
      handleLink, handleClick, pageNumbers, currentPage,
    } = this.props;
    const {post:{pages}}=this.props;
    return (
      <div className="pagination pagination-lg shadow p-3 mb-5 bg-white rounded">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {pages.previous ? (
              <li className="page-item">
                <span
                  className="page-link"
                  id={pages.previous}
                  onClick={handleLink}
                  aria-label="Previous"
                  role="presentation"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </span>
              </li>
            ) : null}

            {pageNumbers.map((num, i) => (
              <li key={`${i + 1}`} className="page-item">
                {currentPage === num ? (
                  <span id={num} className="page-link active-page" role="presentation" onClick={handleClick}>
                    {num}
                  </span>
                ) : (
                  <span id={num} className="page-link" role="presentation" onClick={handleClick}>
                    {num}
                  </span>
                )}
              </li>
            ))}

            {pages.next? (
              <li className="page-item">
                <span className="page-link link-test" id={pages.next} role="presentation" onClick={handleLink} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </span>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    );
  }
}
PaginationContainer.propTypes = {
  getPages:PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  handleLink:PropTypes.func.isRequired,
  handleClick:PropTypes.func.isRequired,
  pageNumbers:PropTypes.array.isRequired,
  currentPage:PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  post: state.post,
 
});
export default connect(mapStateToProps, {getPages})(PaginationContainer);

