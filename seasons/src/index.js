import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
<<<<<<< HEAD
        state = {lat: null,errorMessage: ''};  
     
     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({ errorMessage: error.message}) 
=======
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''};
        
     }
     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({ errorMessage: error.message})
            
>>>>>>> 39bddaa230b91fdaa7de1351792dd25683e31aa2
        );
     }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>
                <h1>Error : {this.state.errorMessage}</h1>
            </div>
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <div>
                <h1><SeasonDisplay  lat={this.state.lat}/></h1>
            </div>
        }
        else {
            return <div>
                <h1>Loading .......</h1>
            </div>
        }
    };
}
ReactDOM.render(
    <App />, document.querySelector('#root')
);