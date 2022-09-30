import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
export default class Nav extends Component {
    render() {
        return (
            <div>
                <h2>NavBar</h2>
                <Link to='/'>Home</Link>
                <Link to='/products/create'>Create Product</Link>
            </div>
        )
    }
}


