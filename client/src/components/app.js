import React from 'react';
import { Component } from 'react';
import NavBar from './navbar';
import SideBarLeft from './sidebar_left';
//import SideBarRight from './sidebar_right';
//import Main from './main';

export default class App extends Component {
  render() {
    return (
      <div className="section-main">
        <div className="container-fluid">
          <NavBar />
        </div>
        <div className=" container-main">
          <div className="row">
            <div className="col-md-2" id="colLeft"> <SideBarLeft /> </div>
            <div className="col-md-10" id="colMain"> {this.props.children} </div>
            {
              /* <div className="col-md-2" id="colRight"> <SideBarRight /> </div> */
            }
          </div>
        </div>
      </div>
    );
  }
}