import React, { Component } from 'react';

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            toggleNav:false
        }
    }
    toggle=()=>{
        this.setState((prevState)=>{
            return {
                toggleNav: !prevState.toggleNav
            }
        })
    }
    render() {
        return (
            <header>
                <div>
                    <div className="logo"> 
                        <a href="#/services">Start Bootstrap</a>
                    </div>
                    <button onClick={this.toggle}>Menu</button>
                    <nav className={this.state.toggleNav? 'show':''}>
                        <ul>
                            <li><a href="#/services">Services</a></li>
                            <li><a href="#/services">Portfolio</a></li>
                            <li><a href="#/services">About</a></li>
                            <li><a href="#/services">Team</a></li>
                            <li><a href="#/services">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}