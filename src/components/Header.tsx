import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-center w-100">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/books">Books</NavLink>
                        <NavLink className="nav-link" to="/activity-logs">Activity Logs</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header