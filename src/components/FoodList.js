import React, {Component} from 'react';
import FoodItem from './FoodItem';

class FoodList extends Component {

constructor(props){
  super(props)

  this.state = {
  
  }

}




  render() {
    const menu = this.props.menu.map((item, index) => (
      <li key={index}>
        <img src={item.image_url}/>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button className="addToOrder" onClick={()=>{this.props.addToOrder(item)} }>Add To Order</button>
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
