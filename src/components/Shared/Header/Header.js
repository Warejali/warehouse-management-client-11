import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import logo from '../../../logo.png';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth);
        navigate('/login')
    }
    return (
        <div className='primary-color'>
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand className=' logo' as={Link} to='/'><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-menu">
                            <Nav.Link className='text-white menu-item' as={Link} to='/'>HOME</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link className=' text-white menu-item' as={Link} to="additems">ADD ITEMS</Nav.Link>
                                    <Nav.Link className=' text-white menu-item' as={Link} to="manageitems">MANAGE ITEMS</Nav.Link>
                                    <Nav.Link className=' text-white menu-item' as={Link} to="myItems">MY ITEMS</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none text-white menu-item' onClick={handleSignOut}>SIGN OUT</button>
                                    :
                                    <Nav.Link className=' text-white menu-item' as={Link} to="login">
                                        LOGIN
                                    </Nav.Link>
                            }
                            {
                                user ? ''
                                    :
                                    <Nav.Link className=' text-white menu-item' as={Link} to="register">
                                        REGISTRATION
                                    </Nav.Link>
                            }

                            <Nav.Link className='text-white menu-item' as={Link} to='/blogs'>BLOGS</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;