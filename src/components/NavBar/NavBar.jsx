import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <main className='Navbar'>
            <nav>
                <li><Link className='NavLink' to="/characters">Character List</Link></li>
                <li><Link className='NavLink' to="/characters/new">New Character</Link></li>
                <li><span className='NavLink'>Welcome, {user.name}</span></li>
                <li><Link className='NavLink' to="" onClick={handleLogOut}>Log Out</Link></li>
            </nav>
        </main>
    )
}

