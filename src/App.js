import Header from "./components/Header";
import Footer from "./components/Footer";
import { Component } from "react";
import Items from "./components/Items";
import items from "./data/items.json";
import Categories from "./components/Categories";
import ShowItemDetails from "./components/ShowItemDetails";
class App extends Component {
	constructor(props) {
    	super(props);
		this.state = {
      		items,
			currentItems: items,
      		orders: [],
			showDetails: false,
			itemDetails: {}
    	};
    	this.addToOrder = this.addToOrder.bind(this);
    	this.deleteOrder = this.deleteOrder.bind(this);
    	this.chooseCategory = this.chooseCategory.bind(this);
    	this.showItemDetails = this.showItemDetails.bind(this);
  	}

  addToOrder (item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }
  }

  chooseCategory (category) {
		if (category === 'all') {
			this.setState({currentItems: this.state.items});
			return;
		}
	  this.setState({currentItems: this.state.items.filter(el => el.category === category)});
  }

  deleteOrder (id) {
	  this.setState({
		  orders: this.state.orders.filter(order => order.id !== id)
	  });
  }

  	showItemDetails (item) {
		this.setState({ itemDetails: item });
		this.setState({ showDetails: !this.state.showDetails });
  	}

  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDeleteOrder={this.deleteOrder} />
	  	<Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} addOrder={this.addToOrder} showItemDetails={this.showItemDetails} />
	  	{this.state.showDetails && <ShowItemDetails item={this.state.itemDetails} addOrder={this.addToOrder} showItemDetails={this.showItemDetails} />}
        <Footer />
      </div>
    );
  }
}

export default App;
