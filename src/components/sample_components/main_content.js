// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// action
import { selectMenu } from '../../actions/sample_component';

class SampleMain extends Component {
    state = {
	term: ''
    }

    componentWillMount() {
      this.props.selectMenu('Not Selected')
    }

    onInputChange(term) {
        this.setState({term});
        // this.props.onSearchTermChange(term);
    }

    render() {
	return (
      <div id="content">
         <h2 className="title">{this.props.current_sample_component_data}</h2>
         <p>
            <div className="">
                <input
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
            <div className="">
               <h3 className="title">This is what you typed</h3>
	       {this.state.term}
            </div>
         </p>
      </div>
	);
    }
}

export default connect(state => state, { selectMenu })(SampleMain);
