import React from 'react';

const SearchBox = ({searchChangeEvent}) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={searchChangeEvent} />
		</div>
	);
}

export default SearchBox; 