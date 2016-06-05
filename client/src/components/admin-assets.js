import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import MainMenuBar from './main-menubar';

export default class AdminAssets extends Component {
  render() {
    return (
      <div className="main-center">
        <div className="row"> <MainMenuBar /> </div>
        <div className="row main-body">
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">Administer Assets</div>
              <table className="table">
                <thead>
                <tr>
                  <th>Asset Type</th>
                  <th>Symbol</th>
                  <th>Purchase Date</th>
                  <th>Purchase Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Stock</td>
                  <td>EXK</td>
                  <td>March 1, 2015</td>
                  <td>1.10</td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>SVMLF</td>
                  <td>March 5, 2015</td>
                  <td>0.97</td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    )
  }
}