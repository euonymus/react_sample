// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// action
import { selectMenu } from '../../actions/sample_component';

class SampleMain extends Component {
    componentWillMount() {
      this.props.selectMenu('Not Selected')
    }

    render() {
	return (
      <div id="content">
         <h2 className="title">{this.props.current_sample_component_data}</h2>
         <p>main</p>
      </div>
	);
    }
}

export default connect(state => state, { selectMenu })(SampleMain);
