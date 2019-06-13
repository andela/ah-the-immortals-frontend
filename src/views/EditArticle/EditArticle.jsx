import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { editPost, getPost } from '../../redux/actions/postActions';


class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      description: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getPost(this.props.match.params.slug);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
    let posts = [];
    posts.push(newProps.post.post);
    posts = posts[0];

    this.setState({
      title: posts.title,
      body: posts.body,
      description: posts.description


    });

  }

  onSubmit(e) {
    e.preventDefault();

    const { slug } = this.props.match.params;
    const { history } = this.props;
    const article = { ...this.state };
    const { editPost } = this.props;
    editPost(slug, article);

    history.push('/postarticle');

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleBodyChange = event => {
    this.setState({
      body: event
    });
  }
  render() {
    const { errors } = this.state;
    const { title } = this.state;
    const { description } = this.state;
    const { body } = this.state;

    return (
      <div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post-form mb-3">
                <div className="card card-info">
                  <div className="card-header" />
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label htmlFor="Title-name" className="col-form-label">Title</label>
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': errors.title
                          })}
                          name="title" value={title || ''}
                          onChange={this.onChange}
                          id="Title-name"
                          placeholder="Title"
                          error={errors.title}
                        />
                        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="description-name" className="col-form-label">Description</label>
                        <input
                          type="text"
                          className={classnames('form-control', {
                            'is-invalid': errors.description
                          })}
                          name="description"
                          value={description || ''}
                          onChange={this.onChange}
                          id="description-name"
                          placeholder="Description"
                        />
                        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="Body-text" className="col-form-label">Body</label>
                        <ReactQuill
                          modules={EditArticle.modules}
                          formats={EditArticle.formats}
                          value={body || ''}
                          id="Body-text"
                          placeholder="What do you want to talk about"
                          name="body"
                          onChange={this.handleBodyChange}
                          required
                        />

                      </div>
                      <div className="form-group">
                        <label htmlFor="Tags-name" className="col-form-label">+ Add Tags</label>
                        <input
                          type="text"
                          placeholder="Help the right people see your post "
                          className="form-control"
                          id="Tags-name"
                        />
                      </div>
                      <button name="edit-form" type="submit" className="btn btn-outline-primary btn-lg btn-block">
                      Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <Link to="/posts" className="btn btn-outline-primary">
              Back to Articles
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
EditArticle.modules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video'],
      [{ align: [] }],
      ['clean']
    ]
  }
};
EditArticle.formats = [
  'header',
  'font',
  'size',
  'italic',
  'underline',
  'strike',
  'bold',
  'blockquote',
  'list',
  'link',
  'image',
  'video',
  'code-block',
  'indent',
  'align',
  'color',
  'background',
  'script',
  'script'
];
EditArticle.propTypes = {
  editPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  post: state.post
});

export default connect(mapStateToProps, { editPost, getPost })(EditArticle);
