import logo from '../assets/airbnb-logo.png'

function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={logo} className="brand-logo" alt="logo" />
        </nav>
    )
}

export default Navbar