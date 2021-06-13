import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import LeafletMap from './Map.js';

import BottomPanel from './BottomPanel';
import { connect } from 'react-redux';
import Grafi from './Grafi';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const lista1 = ["Shfaq Muzet", "Shfaq diqka", "Shfaq diqka tjeter"]
    return(
    <div className="container">
      <div id="mapid"></div>
        <Sidebar layers={lista1}/>
        <LeafletMap />
        <BottomPanel />
        <Grafi data={ "hello"}/>
    </div>
    )
  }
}

export default App;

