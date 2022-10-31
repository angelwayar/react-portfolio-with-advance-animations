import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import './Sidebar.scss';

export interface SidebarInterface { }

const Sidebar: React.FC<SidebarInterface> = () => {
	return (
		<>
			<div className='nav-bar'>
				<Link className='logo' to='/'>
					<img src={LogoS} alt="log" />
					<img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
				</Link>
				<nav>
					<NavLink end to="/">
						<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
					</NavLink>
					<NavLink end to="/about" className="about-link">
						<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
					</NavLink>
					<NavLink end to="/contact" className="contact-link">
						<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
					</NavLink>
				</nav>
				<ul>
					<li>
						<a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/angel-wayar-e/'>
							<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href='https://www.youtube.com/'>
							<FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href='https://www.instagram.com/'>
							<FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
