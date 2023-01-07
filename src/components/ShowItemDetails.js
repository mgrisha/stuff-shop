import React from 'react';

function ShowItemDetails({ item, showItemDetails, addOrder }) {
	return (
		<div className="item-details">
			<div className="item-details__item">
				<img className='item-details__image' src={`./images/${item.img}`} alt={item.desc} onClick={() => showItemDetails(item)} />
				<h2 className='item-details__title'>{item.title}</h2>
				<div className='item-details__description'>{item.desc}</div>
				<div className='item-details__price'>$ {item.price}</div>
				<div className='add-to-cart' onClick={() => addOrder(item)}>+</div>
			</div>
		</div>
	);
}

export default ShowItemDetails;