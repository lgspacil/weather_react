import React, { Component } from 'react';
import './CSS/SearchBar.css'


class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            city: ''
        }

    }

    search = () => {
        this.props.cityName(this.state.city)
    }

    handleKey = (event) => {
        if (event.charCode === 13) {
            this.search();
        }
    }

    handleChange = (event) => {
        this.setState({city: event.target.value});
    }

    clearCity = () => {
        this.setState({city: ''})
        this.props.clearEverything()
    }


    

    render() {
        return (
            <div className="search">
                <span className="fa fa-search" onClick={this.search}></span>
                <input ref="city" type="text" value = {this.state.city} onChange={this.handleChange} onKeyPress={this.handleKey} placeholder="Search City"/>
                <span className="fa fa-times" onClick={this.clearCity}></span>
            </div>
        );
    }
}

export default SearchBar;
