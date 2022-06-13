import { updateCurrentUser} from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth, AuthContext } from '../context/AuthProvider'

export const Navbar = () => {

    const { signOff, currentUser} = useAuth()

    return (
        <nav className="navbar navbar-expand-sm navbar-warning bg-warning">
            <Link className="navbar-brand" to="/">Graphic Novel Nation</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/genre">Genre</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/popular">Popular</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/shop" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop Manga</Link>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <Link className="dropdown-item" to="/items">Items</Link>
                            <Link className="dropdown-item" to="/cart">Cart</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="nav-item active">
                <ul className='navbar-nav ml-auto'>
                    {
                        !currentUser.loggedIn ?
                            (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signin">Sign In</Link>
                                    </li>
                            ) :
                            (
                                    <li className="nav-item">
                                        <Link onClick={signOff} className="nav-link" to="/signin">Sign Out</Link>
                                    </li>
                            )
                    }
                </ul>
            </div>
        </nav>
    )
}
