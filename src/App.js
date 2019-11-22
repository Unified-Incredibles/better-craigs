import React from 'react';
import './App.css';
import NavBar from './components/nav-bar-component/nav-bar';
import DisplayPicturesList from './components/display-pictures-list-component/display-pictures-list';

class App extends React.Component{
  render() {
    return (
      <div>
        <NavBar />
        <DisplayPicturesList />
      </div>
    );
  }

}

export default App;
