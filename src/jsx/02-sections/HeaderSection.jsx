import { useState } from 'react'
import HeaderLogo from '../../img/logo.png'
import HeaderCall from '../../img/header-call.svg'
import HeaderMenu from '../../img/menu.svg'
import { NavLink } from 'react-router-dom'

let HeaderSection = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

    return(
        <header className="header">
			<NavLink to="/" exact={true} className="header__link">
                <img className="header__logo" src={HeaderLogo} alt="placeholder" />
            </NavLink>

            <div className={`header-rc ${isMenuVisible && 'is-menu-visible'}`}>
                <nav className="main-menu">
					<ul className="main-menu__list">
						<li className="main-menu__item">
							<NavLink to="/" exact={true} className="main-menu__link" onClick={toggleMenu}>Home</NavLink>
						</li>
						<li className="main-menu__item">
							<NavLink to="/why" exact={true} className="main-menu__link" onClick={toggleMenu}>Why UpCrunch</NavLink>
						</li>
						<li className="main-menu__item">
							<NavLink to="/product" exact={true} className="main-menu__link" onClick={toggleMenu}>Product Suite</NavLink>
						</li>
					</ul>
				</nav>

                <div className="info">
                    <a href="#placeholder" className="info__call">
                        <img className="info__call-icon" src={HeaderCall} alt="placeholder" />
                    </a>
                    <button className="info__button">Apply Now</button>
                </div>
            </div>

            <a href="#placeholder" className="header__trigger" onClick={toggleMenu}>
                <img className="header__trigger-icon" src={HeaderMenu} alt="placeholder" />
            </a>
        </header>
    )
}

export { HeaderSection }