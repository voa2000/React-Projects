import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return <div> <h1>Latitude: </h1>
        </div>;
    };
    }
ReactDOM.render (
    <App />, document.querySelector('#root')
);