import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" icon="home" legend="Inicio" />
            <NavItem href="/users" icon="users" legend="Usuarios" />
        </nav>
    </aside>