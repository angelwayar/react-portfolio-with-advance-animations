import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { AnimatedLetters } from '../AnimatedLetters';
import './Home.scss';
import { Logo } from './Logo';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
	const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

	useEffect(() => {
		return () => {
			setTimeout(() => {
				setLetterClass('text-animate-hover')
			}, 4000);
		}
	}, []);

	return (
		<>
			<div className='container home-page'>
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i,</span>
						<br />
						<span className={`${letterClass} _13`}>I</span>
						<span className={`${letterClass} _14`}>'m</span>
						<img src={LogoTitle} alt="developer" />
						<AnimatedLetters
							letterClass={letterClass}
							idx={15}
							strArray={nameArray} />
						<br />
						<AnimatedLetters
							letterClass={letterClass}
							idx={22}
							strArray={jobArray} />
					</h1>
					<h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
					<Link to="/contact" className='flat-button'>CONTACT ME</Link>
				</div>
				<Logo />
			</div>
			<Loader active type='pacman' innerClassName='pacman'/>
		</>
	);
};

export default Home;
