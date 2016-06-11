import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userGetAll } from '../actions/index';
import { bindActionCreators } from 'redux';
import MainMenuBar from './main-menubar';

export default class AdminUsers extends Component {

  componentWillMount() {
    this.props.userGetAll();
  }

  render() {
    return (
      <div className="main-center">
        <div className="row"> <MainMenuBar /> </div>
        <div className="row main-body">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">Administer Users</div>
              <div>{this.renderTable()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTable() {
    return (
        <table id="assetTable" className="table table-striped table-bordered" cellSpacing="0" width="100%">
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Controls</th>
          </tr>
          </thead>
          <tfoot>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Controls</th>
          </tr>
          </tfoot>
          <tbody>
          {this.renderUsers()}
          </tbody>
        </table>
    )
  }
  renderUsers() {
    var users = this.props.users;

    if(users == null) {
      return (
        <tr>
          <td colSpan="7">No Users</td>
        </tr>
      );
    } else {
      return this.props.users.map((user) => {
        return (
          <tr key={user._id}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.gender}</td>
            <td>{user.dob}</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
        );
      });
    }
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    users: state.userReducer.users
  };
}

// Anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  // Whenever userGetAll is called, the result should be passed to all of our reducers
  return bindActionCreators({ userGetAll: userGetAll }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);