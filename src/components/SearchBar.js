import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Video Serach</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
