import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchAction from '../../redux/actions/Search.action';
import SearchBar from '../../components/search/SearchBarComponent';

class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  state = {
    filter: {
      title: false,
      author: false,
      tag: false
    },
    searchData: {
    },
    value:{}
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return !nextProps.filter || (nextProps.filter === prevState.filter)
      ? { filter: prevState.filter } : { filter: nextProps.filter };
  }
  handleChange = (e) => {
    const { filter } = this.state;
    this.setState({
      value: e.target.value
    });
    const values = ['title', 'tag', 'author'];
    values.forEach((element) => {
      if (filter[element]) {
        return this.setState({
          searchData: {
            [element]: e.target.value,
          }
        });
      }
      this.setState({
        searchData: {
          title: e.target.value
        }
      });
    });
  };
  handleKeyDown =  (e) => {
    const { search, history } = this.props;
    const { searchData, value } = this.state;
    if (e.keyCode === 13 && e.target.value) {
      search({...searchData,value});
      history.push('/search-page');
      if( document.getElementById('search-bar')){
        document.getElementById('search-bar').value = value;
      }
    } else if (e.keyCode === 13) {
      history.push('/search-page');
    }
  };
  render = () => {
    const { result, history } = this.props;
    return (
      <SearchBar
        handleChange={this.handleChange}
        handleKeyDown={this.handleKeyDown}
        result={result}
        history={history} />
    );
  };
}
const mapStateToProps = ({ search }) => {
  return {
    result: search
  };
};
export default connect(mapStateToProps, { search: SearchAction })(Search);
