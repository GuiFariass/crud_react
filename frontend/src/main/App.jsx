import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Routes from './Route'

import Logo from  '../components/templates/Logo'
import Nav from  '../components/templates/Nav'
import Footer from  '../components/templates/Footer'

export default props => 
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes/>
            <Footer />
        </div>
    </HashRouter>