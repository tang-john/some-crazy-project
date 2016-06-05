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
                {this.renderTable()}
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
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
            <th>Controls</th>
          </tr>
          </thead>
          <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
            <th>Controls</th>
          </tr>
          </tfoot>
          <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>
              <a className="editDataLink" href="1"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="1"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>

          </tr>
          <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
            <td>
              <a className="editDataLink" href="2"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="2"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$86,000</td>
            <td>
              <a className="editDataLink" href="3"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="3"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$433,060</td>
            <td>
              <a className="editDataLink" href="4"><i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
              <a className="deleteDataLink" href="4"><i className="fa fa-minus-square" aria-hidden="true"></i> Delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      );
    }


  }