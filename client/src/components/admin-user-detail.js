import React, { Component } from 'react';


class AdminUserDetail extends Component {

  render() {
    var jt = "johntang3";

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
            <input type="text" className="form-control" id="firstname" defaultValue={this.props.firstname} aria-describedby="basic-addon1" />
            <input type="hidden" className="form-control" id="id" value={this.props.id} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="lasttname">Last Name</label>
            <input type="text" className="form-control" id="lastname" defaultValue={this.props.lastname} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input type="text" className="form-control" id="username" defaultValue={this.props.username} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" defaultValue={this.props.password} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" defaultValue={this.props.password} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" className="form-control" id="gender" defaultValue={this.props.password} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="dob">DOB</label>
            <input type="text" className="form-control" id="dob" defaultValue={this.props.dob} onChange={this.handleChange} aria-describedby="basic-addon1" />
          </div>
        </div>
      );
    }
  }

  handleChange(event) {
    var jt = "johntang4";
    var value = event.target.value;
    var href = event.currentTarget.href;
    
  }

}

export default AdminUserDetail;