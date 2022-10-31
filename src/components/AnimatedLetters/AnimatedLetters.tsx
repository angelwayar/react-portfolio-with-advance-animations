import React from 'react';
import './AnimatedLetters.scss';

export interface AnimatedLettersInterface {
	idx: number;
	strArray: Array<string>;
	letterClass: string;
}

const AnimatedLetters: React.FC<AnimatedLettersInterface> = (props: AnimatedLettersInterface) => {
	return (
		<span>
			{
				props.strArray.map((char: string, i: number) => (
					<span key={char + i.toString()} className={`${props.letterClass} _${i + props.idx}`}>
						{char}
					</span>
				))
			}
		</span>
	);
};

export default AnimatedLetters;
