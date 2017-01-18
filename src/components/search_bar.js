import React, {Component} from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  updateTerm(term) {
    this.setState({term});
    this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="What you want to watch?"
          value={this.state.term}
          onChange={event => this.updateTerm(event.target.value)}
          />
      </div>
    );
  }
}

export default SearchBar;
