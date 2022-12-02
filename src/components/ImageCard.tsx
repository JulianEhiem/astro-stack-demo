import React from 'preact/compat';

export interface Props {
	name: string;
	desc: string;
}

const cardStyle = {
  display: 'inline-block',
	borderRadius: '5px',
	backgroundColor: 'lightgrey',
	width: '250px',
	height: '330px',
	padding: '0',
  margin: '2rem',
};

const cardImageStyle = {
	display: 'flex',
	color: 'white',
	placeContent: 'center',
	borderRadius: '5px 5px 0 0',
	alignItems: 'center',
	backgroundColor: 'black',
	width: '250px',
	height: '250px',
};

const cardContent = {
	padding: '5px 15px',
};

export default function ImageCard({ name, desc }: Props) {
	return (
		<div className="card" style={cardStyle}>
			<div className="card-image" style={cardImageStyle}>
				img
			</div>
			<div className="card-content" style={cardContent}>
				<h3 style={{fontSize: '27px', fontWeight: 'bolder'}}>{name}</h3>
				<p>{desc}</p>
			</div>
		</div>
	);
}
