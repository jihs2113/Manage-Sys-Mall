import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 


const API_KEY = "AIzaSyAhbi0otcwKeixZOHNwTmzebzKt8oaEKiM"  

class Gmap extends Component {
    constructor(props) {
        super(props)
        this.state = {
          place: null,
        };
      }
    
      render() {
        
        return (
          <div >
             <GoogleComponent
             
              apiKey={"AIzaSyAhbi0otcwKeixZOHNwTmzebzKt8oaEKiM"}
              language={'en'}
              country={'country:in|country:us'}
              coordinates={true}
            //   placeholder={'Start typing location'}
            //   locationBoxStyle={'custom-style'}
            //   locationListStyle={'custom-style-list'}
              onChange={(e) => { this.setState({ place: e }) }} />
          </div>
    
        )
      } 
}
 
export default Gmap;