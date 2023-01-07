import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

export default function Header({ orders, onDeleteOrder }) {
  const [cartOpen, setCartOpen] = useState(false);

  const showOrders = orders => {
	  let totalSum = 0;
	  orders.forEach(el => totalSum += Number.parseFloat(el.price));
	  return (
		  <div>
			  {orders.map(el => (
				  <Order key={el.id} item={el} onDeleteOrder={onDeleteOrder} />
			  ))}
			  <div className="total--sum">Сума: ${new Intl.NumberFormat().format(totalSum)}</div>
		  </div>
	  );
  };

  const showNothing = () => <b>Кошик порожній!</b>;

  return (
    <header className='header'>
        <div className='header-menu-logo'>
            <span className='logo'>Меблі для дому</span>
            <div className='menu--shop-cart'>
                <FaShoppingCart className={`shop-cart-button${cartOpen ? ' is-active' : ''}`} onClick={() => setCartOpen(!cartOpen)} />
                {
                  cartOpen && (
                    <div className='shop-cart'>
                      {
                        orders.length > 0 ? showOrders(orders) : showNothing()
                      }
                    </div>
                  )
                }
                <ul className='menu-header'>
                    <li className='menu-header__list'>Про нас</li>
                    <li className='menu-header__list'>Контакти</li>
                    <li className='menu-header__list'>Кабінет</li>
                </ul>
            </div>
        </div>
        <div className='header-presentation'>
            <div className='presentation--title'>
                <div className='presentation--title__top'>Найкращі товари для вашого дому</div>
                <div className='presentation--title__bottom'>за низькими цінами</div>
            </div>
        </div>
    </header>
  )
}
