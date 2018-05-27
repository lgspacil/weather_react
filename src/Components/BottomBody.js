import React, { Component } from 'react';
import './CSS/BottomBody.css'


class BottomBody extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        let fiveDayForcast;
        if (this.props.fiveDayWeather) {
            let convert_month = {
                "01": "Jan",
                "02": "Feb",
                "03": "Mar",
                "04": "Apr",
                "05": "May",
                "06": "Jun",
                "07": "Jul",
                "08": "Aug",
                "09": "Sep",
                "10": "Oct",
                "11": "Nov",
                "12": "Dec"
            }
            // icon http://openweathermap.org/img/w/10d.png
            let count_days = this.props.fiveDayWeather.cnt;
            let weather = this.props.fiveDayWeather.list
            let minValues = [];
            let maxValues = [];
            let icons = [];
            let month = [];
            let day = [];
            let count = 0;

            for (var i = 0; i < count_days; i++) {
                if (!day.includes(weather[i].dt_txt.split(" ")[0].split("-")[2])) {
                    // add a day to the day array
                    day.push(weather[i].dt_txt.split(" ")[0].split("-")[2]);
                    // add a month to the month array
                    month.push(convert_month[weather[i].dt_txt.split(" ")[0].split("-")[1]]);

                    // add temp min first
                    minValues.push(Math.round(weather[i].main.temp_min));

                    // add temp max first
                    maxValues.push(Math.round(weather[i].main.temp_max));

                    // add icon too
                    icons.push((weather[i].weather[0].icon).substring(0, 2))

                    count += 1;
                }

                else {
                    if (weather[i].main.temp_min < minValues[count - 1]) {
                        // if this is true, we found a colder temp this day;
                        minValues[count - 1] = Math.round(weather[1].main.temp_min);
                    }

                    if (weather[i].main.temp_max > maxValues[count - 1]) {
                        maxValues[count - 1] = Math.round(weather[i].main.temp_max);
                    }
                }

            }

            for (var j = 0; j < day.length; j++) {
                day[j] = parseInt(day[j]).toString();
            }

            fiveDayForcast = 
            <div className="BottomBody">
                <div className="dates">
                    <span className="light">{month[0]} {day[0]}</span><br />
                    <img src={"http://openweathermap.org/img/w/"+icons[0]+"d.png"} alt="cloud" /><br />
                    <span>{maxValues[0]}</span><br />
                    <span className="light">{minValues[0]}</span>
                    {/* <div className="borderRight"></div> */}
                </div>
                <div className="dates">
                    <span className="light">{month[1]} {day[1]}</span><br />
                    <img src={"http://openweathermap.org/img/w/"+icons[1]+"d.png"} alt="cloud" /><br />
                    <span>{maxValues[1]}</span><br />
                    <span className="light">{minValues[1]}</span>
                    <div className="borderRight"></div>
                </div>
                <div className="dates">
                    <span className="light">{month[2]} {day[2]}</span><br />
                    <img src={"http://openweathermap.org/img/w/"+icons[2]+"d.png"} alt="cloud" /><br />
                    <span>{maxValues[2]}</span><br />
                    <span className="light">{minValues[2]}</span>
                    <div className="borderRight"></div>
                </div>
                <div className="dates">
                    <span className="light">{month[3]} {day[3]}</span><br />
                    <img src={"http://openweathermap.org/img/w/"+icons[3]+"d.png"} alt="cloud" /><br />
                    <span>{maxValues[3]}</span><br />
                    <span className="light">{minValues[3]}</span>
                    <div className="borderRight"></div>
                </div>
                <div className="dates">
                    <span className="light">{month[4]} {day[4]}</span><br />
                    <img src={"http://openweathermap.org/img/w/"+icons[4]+"d.png"} alt="cloud" /><br />
                    <span>{maxValues[4]}</span><br />
                    <span className="light">{minValues[4]}</span>
                    <div className="borderRight"></div>
                </div>
            </div>

        }
        return (
            <div>
                {fiveDayForcast}
            </div>
            
        );
    }
}

export default BottomBody;
