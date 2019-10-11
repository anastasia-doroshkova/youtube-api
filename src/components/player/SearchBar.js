import React from 'react';

class SearchBar extends React.Component {
    state = {query: ''};

    onInputChange = event => {
        this.setState({query: event.target.value});
    };

    onFormSubmit = event => {
        const { query } = this.state;

        event.preventDefault();
        this.props.onFormSubmit(query);
    };

    render() {
        const { query } = this.state;

        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group mb-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Search"
                               value={query}
                               onChange={this.onInputChange}
                        />
                        <div className="input-group-append">
                            <button
                                onClick={this.onFormSubmit}
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
