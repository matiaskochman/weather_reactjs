import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js'
import GoogleMap from '../components/google_maps'

class WeatherList extends Component{
/*
  constructor(props){
    super(props);

    //this.renderWeather = this.renderWeather.bind(this);
  }
*/
  renderWeather(cityData){
    console.log(cityData);

    let counter = 0;
    const name = cityData.city.name;

    var temps1 = [];
    var humidity1 = [];
    var pressure1 = [];

    var cityArray = cityData.list;

    for (var i = 0; i < 10; i++) {
      temps1.push(cityArray[i].main.temp);
      humidity1.push(cityArray[i].main.humidity);
      pressure1.push(cityArray[i].main.pressure);
    }

    const temps = cityData.list.map((cityTemp) => cityTemp.main.temp - 273);
    const humidity = cityData.list.map((cityTemp) => cityTemp.main.humidity);
    const pressure = cityData.list.map((cityTemp) => cityTemp.main.pressure);
    const {lon,lat} = cityData.city.coord;

    console.log(temps);
    console.log(humidity);
    console.log(pressure);

      return(
        <tr key={name}>
          <td width={180}><GoogleMap lat={lat} lon ={lon} /></td>
          <td width={180}><Chart data={temps} color="orange" units="C"/></td>
          <td width={180}><Chart data={pressure} color="blue" units="hpa"/></td>
          <td width={180}><Chart data={humidity} color="yellow" units="%"/></td>

        </tr>
      );
  }

  render(){
/*
    if(!this.props.weather){
      return(
        <div>search for a city.</div>
      );
    }
*/
    return(

      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  console.log(state.weather);
  // state.weather because combineReducers has {weather:WheatherReducer}
  return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);
