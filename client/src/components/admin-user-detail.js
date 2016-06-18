import React, { Component } from 'react';


class AdminUserDetail extends Component {

  componentWillMount() {
    this.setState( {id: null, firstname: null, lastname: null, username: null, password: null, gender: null, dob: null});
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState( {id: props.id, firstname: props.firstname, lastname: props.lastname, username: props.username, password: props.password, gender: props.gender, dob: props.dob});
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

    if(this.props.id == null) {
      return null;
    } else {
      return (
        <div>
          <h4>User Detail</h4>
          <div className="input-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" value={this.state.firstname} onChange={this.handleChange}  aria-describedby="basic-addon1" />
            <input type="hidden" className="form-control" id="id" value={this.state.id}  aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="lasttname">Last Name</label>
            <input type="text" className="form-control" id="lastname" value={this.state.lastname} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input type="text" className="form-control" id="username" value={this.state.username}  onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" className="form-control" id="gender" value={this.state.gender} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="dob">DOB</label>
            <input type="text" className="form-control" id="dob" value={this.state.dob} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
        </div>
      );
    }
  }

  handleChange(event) {
    var jt = "johntang4";
    var value = event.target.value;
    var id = event.target.id;

    if(id === "firstname") {
       this.setState({firstname : value});
    }
    
  }

}

export default AdminUserDetail;