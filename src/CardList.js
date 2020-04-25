import React from 'react';
import Card from './Card';

const CardList = (props) => {
	let robots = props.robots;
	var robotsInfor = robots.map((robot) => {
			return <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />
		});

	return (
		<div>
			{robotsInfor}
		</div>
	);
}

export default CardList;