import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { userSave } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';


class AdminUser extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    var jt = "jtang02";

    super(props);

    this.state = {firstnameClass: "", lastnameClass: "", usernameClass: "" , passwordClass: "", genderClass: "", dobClass: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.saveUser = this.saveUser.bind(this);

  }

  componentWillMount() {
    this.setState( {id: null, firstname: null, middlename: null, lastname: null, username: null, password: null, gender: null, dob: null});

  }

  componentWillReceiveProps(props){
    var jt = "jtang02";
    this.setState( {id: props.id, firstname: props.firstname, middlename: props.middlename, lastname: props.lastname, username: props.username, password: props.password, gender: props.gender, dob: props.dob});
   }

  render() {
    return (
      <div className="userDetail">
        <div className="row">
          {this.renderUserDetail()}
        </div>
      </div>

    )
  }

  renderUserDetail() {
    var jt = "jtang02";
    jt = this.props.firstname;

    if(this.props.id == null) {
      return null;
    } else {
      return (
        <div>
          <h4>User Detail</h4>
          <form >
            <div className="input-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" className={`form-control ${this.state.firstnameClass}`} id="firstname" defaultValue={this.state.firstname} value={this.state.firstname} onChange={this.handleChange}  aria-describedby="basic-addon1" />
              <input type="hidden" className="form-control" id="id" value={this.props.id}  aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label htmlFor="middlename">Middle Name</label>
              <input type="text" className={`form-control ${this.state.middlenameClass}`} id="middlename" defaultValue={this.state.middlename} value={this.state.middlename} onChange={this.handleChange} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label htmlFor="lasttname">Last Name</label>
              <input type="text" className={`form-control ${this.state.lastnameClass}`} id="lastname" defaultValue={this.state.lastname} value={this.state.lastname} onChange={this.handleChange} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label htmlFor="username">User Name</label>
              <input type="text" className={`form-control ${this.state.usernameClass}`} id="username" defaultValue={this.state.username} value={this.state.username}  onChange={this.handleChange} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="text" className={`form-control ${this.state.passwordClass}`} id="password" defaultValue={this.state.password} value={this.state.password} onChange={this.handleChange} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <input type="text" className={`form-control ${this.state.genderClass}`} id="gender" defaultValue={this.state.gender} value={this.state.gender} onChange={this.handleChange} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label htmlFor="dob">DOB</label>
              <input type="text" className={`form-control ${this.state.dobClass}`} id="dob" defaultValue={this.state.dob} value={this.state.dob} onChange={this.handleChange} aria-describedby="basic-addon1" />
            </div>
            <div className="adminUserSave">
              <a  to="admin-users-save">
                <i className="fa fa-floppy-o  fa-2x" aria-hidden="true"></i> Save
              </a>
              <a  href="#" onClick={this.handleCancel}>
                <i className="fa fa-times fa-2x" aria-hidden="true"></i> Cancel
              </a>

            </div>
          </form>
        </div>
      );
    }
  }

  handleCancel(event) {
    event.preventDefault()
    this.setState({firstname: null,  firstnameClass: "",
                   middlename: null, middlenameClass: "",
                   lastname: null,   lastnameClass: "",
                   username: null,   usernameClass: "",
                   password: null,   passwordClass: "",
                   gender: null,     genderClass: "",
                   dob: null,        dobClass: ""});
  }

  handleChange(event) {
    var jt = "jtang02-a";

    var value = event.target.value;
    var id = event.target.id;

    if(id === "firstname") {
      if(value === this.props.firstname) {
        this.setState({firstname : value, firstnameClass: "not-modified"});
      } else {
        this.setState({firstname : value, firstnameClass: "modified"});
      }

    } else if(id === "middlename") {
      if(value === this.props.middlename) {
        this.setState({middlename : value, middlenameClass: "not-modified"});
      } else {
        this.setState({middlename : value, middlenameClass: "modified"});
      }

    } else if(id === "lastname") {
      if(value === this.props.lastname) {
        this.setState({lastname : value, lastnameClass: "not-modified"});
      } else {
        this.setState({lastname : value, lastnameClass: "modified"});
      }

    } else if(id === "username") {
      if(value === this.props.username) {
        this.setState({username : value, usernameClass: "not-modified"});
      } else {
        this.setState({username : value, usernameClass: "modified"});
      }

    } else if(id === "password") {
      if(value === this.props.password) {
        this.setState({password : value, passwordClass: "not-modified"});
      } else {
        this.setState({password : value, passwordClass: "modified"});
      }

    } else if(id === "gender") {
      if(value === this.props.gender) {
        this.setState({gender : value, genderClass: "not-modified"});
      } else {
        this.setState({gender : value, genderClass: "modified"});
      }

    } else if(id === "dob") {
      if(value === this.props.dob) {
        this.setState({dob : value, dobClass: "not-modified"});
      } else {
        this.setState({dob : value, dobClass: "modified"});
      }
    }
    
  }

  saveUser(event) {

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
  // Whenever userSave is called, the result should be passed to all of our reducers
  return bindActionCreators({ userSave: userSave }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);