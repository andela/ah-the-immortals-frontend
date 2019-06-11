import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchAction from '../../redux/actions/Search.action';
import SearchPage from '../../components/search/SearchPageComponent';

class SearchPageContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    result: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired
  };
  state = {
    filter: {},
    activeOption: {
      default:true
    }
  };
  handleFilter = (e) => {
    e.preventDefault();
    const { search, result } = this.props;
    const { value } = result;
    this.setState({
      filter: {
        [e.target.name]: true,
      },
      activeOption: {
        [e.target.name]: true,
        default:false
      }
    });
    search({
      [e.target.name]: value,
      value
    });
  };
  render = () => {
    const { history, result } = this.props;
    const { filter, activeOption } = this.state;
    return (
      <SearchPage
        result={result}
        history={history}
        filter={filter}
        activeOption={activeOption}
        handleFilter={this.handleFilter} />
    );
  };
}
const mapStateToProps = ({ search }) => {
  return {
    result: search,
  };
};
export default connect(mapStateToProps, { search: SearchAction })(SearchPageContainer);
