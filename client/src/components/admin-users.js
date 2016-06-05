import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import MainMenuBar from './main-menubar';

export default class AdminUsers extends Component {
    render() {
        return (
            <div className="main-center">
                <div className="row"> <MainMenuBar /> </div>
                <div className="row main-body">
                    <div className="col-md-12">

                      <div className="panel panel-default">
                        <div className="panel-heading">Administer Users</div>
                        <table className="table">
                          <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Password</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td><input className="form-control" type="text" value="Joe"  /></td>
                            <td><input className="form-control" type="text" value="Bruin"  /></td>
                            <td><input className="form-control" type="text" value="bruinjoe"  /></td>
                            <td><input className="form-control" type="password" value="Ready2go"  /></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Ready2go</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>Ready2go</td>
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