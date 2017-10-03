import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Places from './components/Places'
import Map from "./components/Map";

class App extends Component {
    render() {
        const location = {
            lat: 55.75225,
            lng: 48.74449};

        return (
            <div>
                THIS IS REACT APP~
                <div style={{width: 300, height: 600, background: 'red'}}>
                    <Map center={location}/>
                </div>
                <Places/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

