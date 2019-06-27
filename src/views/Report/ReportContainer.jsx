import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../Article/Spinner';
import { getPost, reportArticle} from '../../redux/actions/postActions';

class ReportContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason:'',
      description:'',
      
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount() {
    const { match, getPost } = this.props;
    const { params } = match;
    const { slug } = params;
    getPost(slug);
  }
  onSubmit = async (e) => {e.preventDefault();
    const { history ,match } = this.props;
    const { params } = match;
    const { slug } = params;
    const article = { ...this.state};
    const { reportArticle } = this.props;
    await reportArticle(slug, article);
    history.push('/');
  
    
    

  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { post: { post, loading } } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { slug } = params;
    if (post === null || loading || Object.keys(post).length === 0) {<Spinner />;}
    const { reason,description } = this.state;
    return (
      <div>
        <br />
        <br />
        <br />
        {
          Object.keys(post).map((item, i) => (
            <div className="container-fluid text-center" key={`${i + 1}`}>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="card card-info">
                    <h1>{post[item].title}</h1>
                    <div className="card-header" />
                    <div className="card-body">
                      <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label htmlFor="option-name" className="col-form-label">Reason</label>
                          <select className="form-control" name="reason" value={reason} onChange={this.onChange} required>
                            <option value="" disabled className="text-hide">* Please select a reason</option>
                            <option value="Plagiarism">Plagiarism</option>
                            <option value="Rule Violation">Rule Violation</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="description-name" className="col-form-label">Description</label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={description}
                            onChange={this.onChange}
                            id="description-name"
                            placeholder="Reason why you reported this article"
                            required
                          />
                        </div>
                        <div className="modal-footer">
                          <button name="post-form" type="submit" className="btn btn-primary">
                            Report
                          </button>
                          <button type="button" className="btn btn-secondary">cancel</button>
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <br />
        <br />
        <hr />
      </div>
    );
  }
}
ReportContainer.propTypes = {
  getPost: PropTypes.func.isRequired,
  reportArticle: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost,reportArticle })(ReportContainer);
