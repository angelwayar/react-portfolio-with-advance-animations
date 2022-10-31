
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import Loader from 'react-loaders';
import { AnimatedLetters } from '../AnimatedLetters';
import './Contact.scss';

export interface ContactInterface { }

const Contact: React.FC<ContactInterface> = () => {
	const [letterClass, setLetterClass] = useState('text-animate');

	useEffect(() => {
		return () => {
			setTimeout(() => {
				setLetterClass('text-animate-hover')
			}, 3000);
		}
	}, []);

	return (
		<>
			<div className='container contact-page'>
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							idx={15}
							letterClass={letterClass}
							strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
						/>
					</h1>
					<p>
						I nam interested in freelance opportunities - especially ambitious or
						large projects. However, if you hace other request or question,
						don't hesitate to contact me using below form either.
					</p>
					<div className="contact-form">
						<form action="">
							<ul>
								<li className='half'>
									<input type="text" name='name' placeholder='Name' required />
								</li>
								<li className='half'>
									<input type="email" name='email' placeholder='Email' required />
								</li>
								<li>
									<input type="text" name='subject' placeholder='Subject' required />
								</li>
								<li>
									<textarea placeholder='Message' name='message' required></textarea>
								</li>
								<li>
									<input type="submit" className='flat-button' value="SEND" />
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className="info-map">
					Slobodan Gajic,
					<br />
					Serbia,
					<br />
					Branka RadiCevicá 19, 22000 <br />
					Sremska Mitrovica <br />
					<span>angelmanuelwayar@gmail.com</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={[-17.787032, -63.128559]} zoom={15}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={[-17.787032, -63.128559]}>
							<Popup> Sloba lives here, come over for a cup of coffe :)</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader active type="pacman" />
		</>
	);
};

export default Contact;
