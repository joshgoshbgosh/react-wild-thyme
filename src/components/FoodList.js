import React, {Component} from 'react';
import FoodItem from './FoodItem';

class FoodList extends Component {







  render() {
    const menu = this.props.menu.map((item, index) => (
      <li key={index}>
        <img src={item.image_url}/>
        <h3>{item.name}</h3>
        <p>{item.price}</p>

      </li>
    ));
    return(
      <div className=" foodmenu col-3">
        <h1>Cafe Menu</h1>
        <ul>{menu}</ul>
      </div>
    )
  }
}

export default FoodList;
