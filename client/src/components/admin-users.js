import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userGetAll } from '../actions/index';
import { bindActionCreators } from 'redux';
import MainMenuBar from './main-menubar';
import AdminUser from './admin-user';

export default class AdminUsers extends Component {

  componentWillMount() {
    var jt = "jtang01";
    this.props.userGetAll();
    //this.setState( {id: 1, firstname: "Joe", middlename: "Huu", lastname: "Smith", username: "jsmith", password:"Brea2010", gender: "male", dob: "1975-09-12"});
    this.setState( {id: null, firstname: null, middlename: null, lastname: null, username: null, password: null, gender: null, dob: null});
  }

  render() {
    var jt = "jtang01";

    return (
      <div className="main-center">
        <div className="row"> <MainMenuBar /> </div>
        <div className="row main-body">
          <div className="col-md-10" id="pageColMain">
            <div className="panel panel-default">
              <div className="panel-heading">Administer Users</div>
              <div>{this.renderTable()}</div>
            </div>
          </div>
          <div className="col-md-2" id="pageColRight">
              <AdminUser
                id={this.state.id}
                firstname={this.state.firstname}
                firstnameClass="notModified"
                middlename={this.state.middlename}
                middlenameClass="notModified"
                lastname={this.state.lastname}
                lastnameClass="notModified"
                username={this.state.username}
                usernameClass="notModified"
                password={this.state.password}
                passwordClass="notModified"
                gender={this.state.gender}
                genderClass="notModified"
                dob={this.state.dob}
                dobClass="notModified"
              />
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
            <th>Middle Name</th>
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
            <th>Middle Name</th>
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
      var uri;
      return this.props.users.map((user) => {
        uri = `?id=${user._id}&firstname=${user.firstname}&lastname=${user.username}&username=${user.username}&password=${user.password}&gender=${user.gender}&dob=${user.dob}`;
        return (
          <tr key={user._id} >
            <td>{user.firstname}</td>
            <td>{user.middlename}</td>
            <td>{user.lastname}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.gender}</td>
            <td>{user.dob}</td>
            <td>
              <i className="fa fa-pencil" aria-hidden="true" onClick={() => this.setUserDetail(user._id, user.firstname, user.middlename, user.lastname, user.username, user.password, user.gender, user.dob)} ></i>
              <a className="deleteDataLink" href="3"><i className="fa fa-trash" aria-hidden="true"></i></a>
            </td>
          </tr>
        );
      });
    }
  }

  setUserDetail(_id, _firstname, _middlename, _lastname, _username, _password, _gender, _dob) {
    this.setState( {id: _id, middlename:  _middlename, firstname: _firstname, lastname: _lastname, username: _username, password: _password, gender: _gender, dob: _dob});
  }

}


function mapStateToProps(state) {
  // Whatever is returned will show up as props
  var jt = "jtang01";
  return {
    users: state.usersReducer.users
  };
}

// Anything returned from this function will end up as props
function mapDispatchToProps(dispatch) {
  // Whenever userGetAll is called, the result should be passed to all of our reducers
  return bindActionCreators({ userGetAll: userGetAll }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);