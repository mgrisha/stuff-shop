import React from 'react'
import { FaTrash } from 'react-icons/fa';

export default function Order({ item, onDeleteOrder }) {
	return (
		<div className='order-item'>
      		<img className='order-item__image' src={`./images/${item.img}`} alt={item.desc} />
      		<div className='order-item__title-price'>
        		<div className='order-item__title'>{item.title}</div>
        		<div className='order-item__price'>$ {item.price}</div>
      		</div>
			<FaTrash className="delete-order" onClick={() => onDeleteOrder(item.id)} />
    	</div>
  	)
}
