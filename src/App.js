import React, { Component } from 'react';
import FoodList from './components/FoodList';
import Order from './components/Order';

class App extends Component {
  // build your constructor
  // have an empty array for menu items
constructor (props){
  super(props)
   this.state = {
     menu: [],
   }
}

  // build your componentDidMount method
  // use it to add static menu items to the empty menu array on state
componentDidMount() {
  const menu = [{
    image_url: "https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86",
    name: 'pizza',
    price: 10.00
  }, {
    image_url: "https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86",
    name: 'pizza',
    price: 10.00
  }, {
    image_url: "https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86",
    name: 'pizza',
    price: 10.00
  }, {
    image_url: "https://i.imgur.com/rx3f5cv.jpg",
    name: 'steak',
    price: 20.00,
  }, {
    image_url: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Bacon-Cheeseburgers-with-Fry-Sauce_EXPS_THAM19_232817_B11_08_3b.jpg",
    name: 'cheeseburger',
    price: 15.00
}];
  this.setState({menu});

};

  render() {
    // pass menu items on state down to FoodList
  //   const menuItems = [[Item: Pizza, Price: 10.00, <img src="https://www.hungryhowies.com/sites/default/files/styles/menu_item_280x175/public/images/menu-items/thumbnails/buildyourownpizza_0.png?itok=fgzFck86">],
  // [Item: Steak, Price: 20.00, <img src="https://i.imgur.com/rx3f5cv.jpg">],[Item: Cheese Burger, Price: 15.00, <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Bacon-Cheeseburgers-with-Fry-Sauce_EXPS_THAM19_232817_B11_08_3b.jpg">]]
    return (
      <React.Fragment>
        <FoodList menu={this.state.menu} />
      </React.Fragment>
    )
  }
}


export default App;
