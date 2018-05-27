import React, { Component } from 'react';
import './CSS/MiddleBody.css'



class MiddleBody extends Component {

    constructor(){
        super();
        this.state = {
            weatherInfo: {}
        }

    }

    capitalizeFirstLetter = (string) => {
        var result = [];
        var splitStr = string.split(' ');
        for(var i = 0; i < splitStr.length; i++){
            result.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1));
        }
        return result.join(' ');
    }


    render() {
        let temp, humidity, description;
        if(this.props.todayWeather){
            temp = <span>{Math.round(this.props.todayWeather.main.temp)}<div className="degree"><span>&#8457;</span></div></span>
            description = <span>{this.capitalizeFirstLetter(this.props.todayWeather.weather[0].description)}</span>
            humidity = <span>{this.props.todayWeather.main.humidity}% Humidity</span>
            
        }
        return (
            <div className="middle_container">
                <div className="temp">
                    {temp}
                </div>
                <div className="temp_info">
                    {description}<br />
                    {humidity}
                </div>
            </div>
        );
    }
}

export default MiddleBody;
