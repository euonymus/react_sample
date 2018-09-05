// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// action
import { selectMenu } from '../../actions/sample_component';

class SampleSidebar extends Component {
  state = {
      menu_list: ['Awesome Site', 'Wonderful Site']
  }

  onMenuClick = (menu) => {
      this.props.selectMenu(menu)
  }

  render() {
      const menuList = this.state.menu_list.map(menu => {
	  return (
             <li key={menu} className="anchor" onClick={() => this.onMenuClick(menu)}>{menu}</li>
	  )
      });

      return (
         <div id="sidebar">
           <ul>
              {menuList}
           </ul>
         </div>
      );
  }
}

export default connect(state => state, { selectMenu })(SampleSidebar);
