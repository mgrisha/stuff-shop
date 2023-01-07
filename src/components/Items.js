import React, { Component } from 'react'
import Item from './Item';

class Items extends Component {
  render() {
    const { items, addOrder, showItemDetails } = this.props;
    return (
      <div className='items'>
        {items.map(el => (
          <Item item={el} key={el.id} addOrder={addOrder} showItemDetails={showItemDetails} />
        ))}
      </div>
    )
  }
}

export default Items