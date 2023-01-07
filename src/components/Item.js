import React, { Component } from 'react'

class Item extends Component {
  render() {
    const { item, addOrder, showItemDetails } = this.props;
    return (
        <div className='item'>
          <img className='item--image' src={`./images/${item.img}`} alt={item.desc} onClick={() => showItemDetails(item)} />
          <h2 className='item--title'>{item.title}</h2>
          <div className='item--description'>{item.desc}</div>
          <div className='item--price'>$ {item.price}</div>
          <div className='add-to-cart' onClick={() => addOrder(item)}>+</div>
        </div>
    )
  }
}

export default Item