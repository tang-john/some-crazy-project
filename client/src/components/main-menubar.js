import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';


export default class MainMenuBar extends Component {
    render() {
        return (
            <ul className="list-inline main-menubar">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars" aria-hidden="true"></i></a>
                    <ul className="dropdown-menu">
                        <li><a href="#colLeft" className="toggle btn">Toggle Display: Left Menu Bar</a></li>
                        <li className="divider"></li>

                        <li><a href="#colRight" className="toggle btn">Toggle Display: Right Menu Bar</a></li>
                        <li className="divider"></li>

                        <li><a href="#">Account Settings <span className="glyphicon glyphicon-cog pull-right"></span></a></li>
                        <li className="divider"></li>
                        <li><a href="#">User stats <span className="glyphicon glyphicon-stats pull-right"></span></a></li>
                        <li className="divider"></li>
                        <li><a href="#">Messages <span className="badge pull-right"> 42 </span></a></li>
                        <li className="divider"></li>
                        <li><a href="#">Favourites Snippets <span className="glyphicon glyphicon-heart pull-right"></span></a></li>
                        <li className="divider"></li>
                        <li><a href="#">Sign Out <span className="glyphicon glyphicon-log-out pull-right"></span></a></li>
                    </ul>
                </li>
                <li><i className="fa fa-bell" aria-hidden="true"></i></li>
                <li><i className="fa fa-building" aria-hidden="true"></i></li>
            </ul>
        )
    }
}
