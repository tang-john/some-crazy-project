import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';


export default class Main extends Component {
  render() {
    return (
      <div className="sideBarLeft">
        <div className="header">Navigation</div>
        <ul className="nav">
          <li className="selected"><a href="/"><i className="fa fa-home"></i>Dashboard</a></li>
          <li><a href="#"><i className="fa fa-area-chart"></i>Graphs</a></li>
          <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-cogs" aria-hidden="true"></i>Admin <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                  <li><Link to={"admin-assets"}><i className="fa fa-university" aria-hidden="true"></i> Assets</Link></li>
                  <li><Link to={"admin-users"}><i className="fa fa-user" aria-hidden="true"></i> Users</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to={"#"}><i className="fa fa-bar-chart" aria-hidden="true"></i> Separated link</Link></li>
              </ul>
          </li>

          <li><a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i>Reports</a></li>
          <li><a href="#"><i className="fa fa-database"></i>Analytics</a></li>
          <li><a href="#"><i className="fa fa-download"></i>Export</a></li>
        </ul>
          <div className="header">Preferences</div>
          <ul className="nav">
              <li className="selected"><a href="/"><span className="glyphicon glyphicon-home"></span> Dashboard</a></li>
              <li><a href="#"><i className="fa fa-area-chart"></i> Graphs</a></li>
              <li><a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i> Reports</a></li>
              <li><a href="#"><i className="fa fa-database"></i> Analytics</a></li>
              <li><a href="#"><i className="fa fa-download"></i> Export</a></li>
          </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>
      </div>
    )
  }
}
