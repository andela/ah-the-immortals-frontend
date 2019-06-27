import React, { Component } from 'react';
import ReactQuill, { Quill,getText } from 'react-quill';
import { WithContext as ReactTags } from 'react-tag-input';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import Spinner from '../Article/Spinner';
import { addPost } from '../../redux/actions/postActions';
import '../../styles/Tags.css';


export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      description: '',
      tags: [],
      isLoading: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit = async (e) => {
    this.setState({ isLoading: true });
    e.preventDefault();
    const { history } = this.props;
    const allTags = this.state.tags;
    const Tags = allTags.map((singleTag)=> { return singleTag.text;});
    const article = { ...this.state, tags: Tags, };
    const { addPost } = this.props;
    await addPost(article, (slug) => history.push(`/post/${slug}`), () => this.setState({ isLoading: false }));
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBodyChange = (content,delta,source,editor) => {this.setState({body: editor.getText(content)});};
  handleDelete(i) {const { tags } = this.state;
    this.setState({tags: tags.filter((tag, index) => index !== i),});
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    this.setState({ tags: newTags });
  }

  render() {
    const { errors, title, isLoading, description, body,tags } = this.state;
    let Image = Quill.import('formats/image');
    Image.className = 'img-fluid';
    Quill.register(Image, true);

    return (
      <div>
        {
          isLoading ? <Spinner /> :
            (
              <div>
                <br />
                <br />
                <br />
                <div className="row">
                  <div className="col-md-8 offset-md-2">
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
                              name="title" value={title}
                              onChange={this.onChange}
                              id="Title-name"
                              placeholder="Title Of the Article"
                              required
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
                              value={description}
                              onChange={this.onChange}
                              id="description-name"
                              placeholder="This is a short summary of the Article"
                              required
                            />
                            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="Body-text" className="col-form-label">Body</label>
                            <ReactQuill
                              modules={PostForm.modules}
                              formats={PostForm.formats}
                              id="Body-text"
                              placeholder="What do you want to talk about"
                              name="body"
                              onChange={this.handleBodyChange}
                              required
                            />

                          </div>
                          <div className="form-group">
                            <label htmlFor="Tags-name" className="col-form-label">+ Add Tags</label>
                            <ReactTags
                              tags={tags}
                              handleDelete={this.handleDelete}
                              handleAddition={this.handleAddition}
                              handleDrag={this.handleDrag}
                            />
                          </div>
                          <div className="modal-footer">
                            <button name="post-form" type="submit" className="btn btn-primary">
                            Publish
                            </button>
                            <button type="button" className="btn btn-secondary">cancel</button>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            )
        }
      </div>


    );
  }
}


PostForm.modules = {
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
PostForm.formats = [
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
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post.posts,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
