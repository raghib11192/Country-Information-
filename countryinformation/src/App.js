import "./App.css";
import {Container} from 'react-bootstrap'

import Nav from "./components/Nav";
import React, { Component } from 'react';
import Header1 from "./components/Header1";
import Information from "./components/Information";
import Flag from "./components/Flag";
class App extends Component {
  
    state={
      capital:undefined,
      area:undefined,
      two_character_code:undefined,
      three_character_code:undefined,
      native_name:undefined,
      population:undefined,
      region:undefined,
      name:undefined
    }

    getCountry=async(e)=>{
    e.preventDefault();
    
    const country=e.target.textContent;
    console.log(country);
    const api_call=await fetch(`https://restcountries-v1.p.rapidapi.com/name/${country}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "528dfc0e31mshc1c6bb3e2ac5d8dp1e2d4ejsn84e0b37d5e0f"
      }
    });
    const data=await api_call.json();
    console.log(data);
    if(country=="India"){
      this.setState(
        {
          capital:data[1].capital,
          area:data[1].area,
          two_character_code:data[1].alpha2Code,
          three_character_code:data[1].alpha3Code,
          native_name:data[1].nativeName,
          population:data[1].population,
          region:data[1].region,
          name:data[1].name
        }
      );

    }
    else{
      this.setState(
        {
          capital:data[0].capital,
          area:data[0].area,
          two_character_code:data[0].alpha2Code,
          three_character_code:data[0].alpha3Code,
          native_name:data[0].nativeName,
          population:data[0].population,
          region:data[0].region,
          name:data[0].name

        }
      );

    }
    
  }
  render() {
    return (
      <div className="main">
          <div className="header"><Nav/></div>
          <div className="search_box"><Container><Header1 getCountry={this.getCountry}/></Container></div>
          <div className="main_content"><Container><Information 
           capital={this.state.capital}
           area={this.state.area}
           two_character_code={this.state.two_character_code}
           three_character_code={this.state.three_character_code}
           native_name={this.state.native_name}
           population={this.state.population}
           region={this.state.region}
           name={this.state.name}
           /></Container>
          </div>
           
          <div className="sidebar"><Container><Flag name={this.state.name} /></Container></div>

        
        
      </div>
      
    );
  }
}

export default App;