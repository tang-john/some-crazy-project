import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';
import MainMenuBar from './main-menubar';

export default class Home extends Component {
    render() {
        return (
            <div className="main-center">
                <div className="row"> <MainMenuBar /> </div>
                <div className="row main-body">
                    <div className="col-md-8"> <MainMenuBar /> </div>
                    <div className="col-md-4"> <MainMenuBar /> </div>
                </div>

            </div>
        )
    }
}