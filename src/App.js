import React from 'react';
import './App.css';
import NavBar from './components/nav-bar-component/nav-bar';
import DisplayPicturesList from './components/display-pictures-list-component/display-pictures-list';
import data from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pictureList:data
    }
   
  }
  render() {
    return (
      <div>
        <NavBar />
        {/* <DisplayPicturesList pictureList = {this.state.pictureList}/> */}
      </div>
    );
  }

}

export default App;
