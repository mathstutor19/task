import narbarhomeicon from '../../assets/icons/narbarhomeicon.svg'
import navbarcommuniryicon from '../../assets/icons/navbarcommuniryicon.svg'
import navbarplayicon from '../../assets/icons/navbarplayicon.svg'
import communityImage1 from '../../assets/icons/communityImage1.svg'
import communityImage2 from '../../assets/icons/communityImage2.svg'
import communityImage3 from '../../assets/icons/communityImage3.svg'
import navbarLeftIcon from '../../assets/icons/navbarLeftIcon.svg'
import navbarHelp from '../../assets/icons/navbarHelp.svg'
import './NavbarMenu.scss'

const NavbarMenu: React.FC = () => {
    return (
        <div className="navbar__menu">
            <h2 className='navbar__title'>Main</h2>
            <ul className='navbar__items'>
                <li className='navbar__item'>
                    <a className='narbar__link' href='#'>
                        <div className='link__wrapper'>
                            <img className='link__image' src={narbarhomeicon} alt="narbarhomeicon" />
                            <p>
                                Home
                            </p>
                        </div>
                    </a>
                </li>
                <li className='navbar__item'>
                    <a className='narbar__link' href='#'>
                        <div className='link__wrapper'>
                            <img className='link__image' src={navbarplayicon} alt="navbarplayicon" />
                            <p>
                                Watch
                            </p>
                            <span className='watch__count' >2</span>
                        </div>
                    </a>
                </li>
                <li className='navbar__item'>
                    <a className='narbar__link' href='#'>
                        <div className='link__wrapper'>
                            <img className='link__image' src={navbarcommuniryicon} alt="navbarcommuniryicon" />
                            <p>
                                Community
                            </p>
                            <div className="community__image__wrapper">
                                <img className='community__image-first community__image' src={communityImage1} alt="communityImage1" />
                                <img className='community__image-second community__image' src={communityImage2} alt="communityImage2" />
                                <img className='community__image-third community__image' src={communityImage3} alt="communityImage3" />
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <img className='navbar__left__icon' src={navbarLeftIcon} alt="navbarLeftIcon" />
            <div className='navbar__help'>
                <img className='navbar__help__image' src={navbarHelp} alt="navbarHelp" />
                <p className='navbar__text' >Help</p>
            </div>
        </div >
    )
}

export default NavbarMenu
