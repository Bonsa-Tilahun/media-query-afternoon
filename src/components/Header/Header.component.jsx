import React, { Component } from 'react'

import './header.styles.css'

class Header extends Component {
    constructor(){
        super()

        this.state={
            menuOpen: false
        }
        this.handleMenuToggle = this.handleMenuToggle.bind(this)
    }

    handleMenuToggle(){
        this.setState({
            menuOpen:!this.state.menuOpen
        })
    }
    render(){
        return(
            <div className={`header-container ${this.state.menuOpen ? 'blackbackground' : ''}`}>
                <nav className={`nav-bar`}>
                    <a className='nav-bar-logo' href="#">Start Bootstrap</a>
                    <ul className='nav-bar-menu-items'>
                        <li className='nav-bar-menu-item'> SERVICES </li>
                        <li className='nav-bar-menu-item'> PORTFOLIO </li>
                        <li className='nav-bar-menu-item'> ABOUT </li>
                        <li className='nav-bar-menu-item'> TEAM </li>
                        <li className='nav-bar-menu-item'> CONTACT </li>
                    </ul>
                    <button onClick={this.handleMenuToggle} className='menu-toggle'>Menu</button>
                    <ul className={`mobile-nav-bar-menu-items ${this.state.menuOpen ? 'menu-opened' : ''}`}>
                        <li className='mobile-nav-bar-menu-item'> SERVICES </li>
                        <li className='mobile-nav-bar-menu-item'> PORTFOLIO </li>
                        <li className='mobile-nav-bar-menu-item'> ABOUT </li>
                        <li className='mobile-nav-bar-menu-item'> TEAM </li>
                        <li className='mobile-nav-bar-menu-item'> CONTACT </li>
                    </ul>
                </nav>
    
            </div>
        )
    }
}

export default Header