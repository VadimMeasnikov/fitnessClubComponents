import './Navigation.scss'

export default function Navigation() {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <a href='#' className='logo'><img src='./img-public/logo.png'></img></a>
                <div className='navigation'>
                    <a href='#' className='nav-link'>Classess</a>
                    <a href='#' className='nav-link'>Timetable</a>
                    <a href='#' className='nav-link'>Clubs</a>
                    <a href='#' className='nav-link'>Nutrition</a>
                    <a href='#' className='nav-link'>Free Trial</a>
                    <a href='#' className='nav-link'>Search <img src='./img-public/search.png'></img></a>
                </div>
                <div className='logBox'><button className='buttonLog'>Log In</button></div>
            </div>

        </div>
    )
}
