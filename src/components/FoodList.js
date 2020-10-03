import React, {Component} from 'react';
import FoodItem from './FoodItem';

class FoodList extends Component {

constructor(props){
  super(props)

  this.state = {
    cart: [],
  }
  this.handleClick = this.handleClick.bind(this)
}
handleClick(food){
  // is a shallow copy,  takes current state of order and adds to it
  let order = [...this.state.cart, food];
  this.setState({cart: order});
  console.log("food",food);
}





  render() {
    const menu = this.props.menu.map((item, index) => (
      <li key={index}>
        <img src={item.image_url}/>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button className="addToOrder" onClick={()=>{this.handleClick(item)} }>Add To Order</button>
      </li>
    ));
    return(
      <div className=" foodmenu col-5">
        <h1>Cafe Menu</h1>
        <ul>{menu}</ul>
      </div>
    )
  }
}

export default FoodList;
