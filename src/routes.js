// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';
// component
import App  from './components/App';
import SampleComponent from './components/sample_components/index';
// extras
import logo from './logo.svg';

class AppRoutes extends Component {
    render () {
	return (
   <BrowserRouter>
     <LastLocationProvider>
      <div className="main-content">

         <ScrollMemory />
         <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/sample_component' component={SampleComponent}/>
         </Switch>

      </div>
     </LastLocationProvider>
   </BrowserRouter>
	)
    }
}

export default connect(state => state, {})(AppRoutes);
