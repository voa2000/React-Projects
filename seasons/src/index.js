import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
constructor(props){
    super(props);
this.state={lat:40};
}

    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return <div> <h1>Latitude : {this.state.lat}</h1>
        </div>;
    };
    }
ReactDOM.render (
    <App />, document.querySelector('#root')
);