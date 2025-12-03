import "./Header.css"
import dotaLogo from '../../media/dota2_logo.png'

function Header(){
    return (
        <header className="header">
            <div className="header__logo">
                <img src={dotaLogo} className="header__logo-img"></img>
                <span className='header__logo-text'>Dota Hub</span>
            </div>

            <nav className="header__nav">
                <a href="#home" className="header__nav-link">Heroes</a>
                <a href="#home" className="header__nav-link">Matches</a>
                <a href="#home" className="header__nav-link">Items</a>
            </nav>


            <button className="header__btn">Sign in with Steam</button>
        </header>
    )
}

export default Header