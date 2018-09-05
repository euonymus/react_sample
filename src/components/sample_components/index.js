import React, { Component } from 'react';
import SampleHeader from './header';
import SampleSidebar from './sidebar';
import SampleMain from './main_content';
import SampleFooter from './footer';
import '../../styles/sample_components.css';

class SampleComponent extends Component {
  render() {
    return (
      <div className="App">
        <SampleHeader />
        <SampleMain />
        <SampleSidebar />
        <SampleFooter />
      </div>
    );
  }
}

export default SampleComponent;
