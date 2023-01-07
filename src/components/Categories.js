import React, { useState } from 'react';
import items from '../data/categories.json';

function Categories({ chooseCategory }) {
	const [categories] = useState(items);

	return (
		<div className="categories">
			{categories.map(el => (
				<div className="categories--item" key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
			))}
		</div>
	);
}

export default Categories;