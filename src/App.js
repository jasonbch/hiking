import React from "react"

import Titles from "./components/Titles"
import Form from "./components/Form"
import Hike from "./components/Hike"

const API_KEY = "200460749-5598157e43b747000e1fd6f501513099"

class App extends React.Component {
  state = {
    id: undefined,
    name: undefined,
    type: undefined,
    summary: undefined,
    difficulty: undefined,
    stars: undefined,
    starVotes: undefined,
    location: undefined,
    url: undefined,
    imgSqSmall: undefined,
    imgSmall: undefined,
    imgSmallMed: undefined,
    imgMedium: undefined,
    length: undefined,
    ascent: undefined,
    descent: undefined,
    high: undefined,
    low: undefined,
    longitude: undefined,
    latitude: undefined,
    conditionStatus: undefined,
    conditionDetails: undefined,
    conditionDate: undefined,
    error: undefined
  }

  getTrails = async (event) => {
    event.preventDefault()

    
    const city = event.target.elements.city.value
    const state = event.target.elements.state.value
    const distance = event.target.elements.distance.value
    if (city && state && distance) {
      
      const location_api_call = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&state=${state}&format=json&polygon=1&addressdetails=1`)
      const locationData = await location_api_call.json()

      const lat = locationData[0].lat
      const long = locationData[0].lon
      const api_call = await fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${distance}&key=${API_KEY}`)
      const data = await api_call.json()

      const number = Math.floor(Math.random() * Object.keys(data.trails).length)

      this.setState({
        id: data.trails[number].id,
        name: data.trails[number].name,
        type: data.trails[number].type,
        summary: data.trails[number].summary,
        difficulty: data.trails[number].difficulty,
        stars: data.trails[number].stars,
        starVotes: data.trails[number].starVotes,
        location: data.trails[number].location,
        url: data.trails[number].url,
        imgSqSmall: data.trails[number].imgSqSmall,
        imgSmall: data.trails[number].imgSmall,
        imgSmallMed: data.trails[number].imgSmallMed,
        imgMedium: data.trails[number].imgMedium,
        length: data.trails[number].length,
        ascent: data.trails[number].ascent,
        descent: data.trails[number].descent,
        high: data.trails[number].high,
        low: data.trails[number].low,
        longitude: data.trails[number].longitude,
        latitude: data.trails[number].latitude,
        conditionStatus: data.trails[number].conditionStatus,
        conditionDetails: data.trails[number].conditionDetails,
        conditionDate: data.trails[number].conditionDate,
        error: ""
      })
    } else {
      this.setState({
        id: undefined,
        name: undefined,
        type: undefined,
        summary: undefined,
        difficulty: undefined,
        stars: undefined,
        starVotes: undefined,
        location: undefined,
        url: undefined,
        imgSqSmall: undefined,
        imgSmall: undefined,
        imgSmallMed: undefined,
        imgMedium: undefined,
        length: undefined,
        ascent: undefined,
        descent: undefined,
        high: undefined,
        low: undefined,
        longitude: undefined,
        latitude: undefined,
        conditionStatus: undefined,
        conditionDetails: undefined,
        conditionDate: undefined,
        error: "Please enter a value"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getTrails={this.getTrails}/>
                  <Hike 
                    id={this.state.id}
                    name={this.state.name}
                    type={this.state.type}
                    summary={this.state.summary}
                    difficulty={this.state.difficulty}
                    stars={this.state.stars}
                    starVotes={this.state.starVotes}
                    location={this.state.location}
                    url={this.state.url}
                    imgSqSmall={this.state.imgSqSmall}
                    imgSmall={this.state.imgSmall}
                    imgSmallMed={this.state.imgSmallMed}
                    imgMedium={this.state.imgMedium}
                    length={this.state.length}
                    ascent={this.state.ascent}
                    descent={this.state.descent}
                    high={this.state.high}
                    low={this.state.low}
                    longitude={this.state.longitude}
                    latitude={this.state.latitude}
                    conditionStatus={this.state.conditionStatus}
                    conditionDetails={this.state.conditionDetails}
                    conditionDate={this.state.conditionDate}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


        