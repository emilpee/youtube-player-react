import React from 'react';

class SearchBar extends React.Component {
    state = {
        input: ''
    };

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleFormSubmit(this.state.input);
    }

    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="search">Search videos:</label>
                    <input 
                        onChange={this.handleInput} 
                        type="text" 
                        value={this.state.input} 
                        id="search"
                    />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SearchBar;