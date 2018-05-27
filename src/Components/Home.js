import React, { Component } from 'react';
import './CSS/Home.css'
import SearchBar from './SearchBar';
import MiddleBody from './MiddleBody';
import BottomBody from './BottomBody';
import $ from 'jquery';



class Home extends Component {

    constructor() {
        super();
        this.state = {
            city: '',
            fiveDayWeather: undefined,
            todayWeather: undefined
        }
    }

    handleCity = (city) => {
        let fiveDayUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=bb928725dc4b57216334e06c6fbafa99";
        $.ajax({
            type: 'GET',
            dataType: 'json',
            cache: false,
            url: fiveDayUrl,
            success: (data) => {
                this.setState({fiveDayWeather: data})
            },
            error: (err) => {
                alert('City not found, please try again')
                console.log('got an error', err);
            } 
        })
        
        let todayUrl = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID=bb928725dc4b57216334e06c6fbafa99"

        $.ajax({
            type: 'GET',
            dataType: 'json',
            cache: false,
            url: todayUrl,
            success: (data) => {
                this.setState({todayWeather: data})
            },
            error: (err) => {
                console.log('got an error', err);
            } 
        })
        
    }

    clearEverything =() =>{
        this.setState({city: '', fiveDayWeather: undefined, todayWeather: undefined})
    }


    render() {
        return (
            <div className="container">
                <SearchBar cityName={this.handleCity} clearEverything={this.clearEverything}/>
                <MiddleBody todayWeather={this.state.todayWeather}/>
                <BottomBody fiveDayWeather={this.state.fiveDayWeather} />
            </div>
        );
    }
}

export default Home;
