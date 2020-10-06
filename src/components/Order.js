import React, {Component} from 'react';

class Order extends Component {




  render() {
    const cart = this.props.cart.map((item, index) => (
      <li key={index}>
        <img src={item.image_url}/>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button className="addToOrder" onClick={()=>{this.props.removeOrder(item)} }>Remove Item</button>
      </li>
    ));

    const subtotal = this.props.cart.reduce((acc, item)=> acc + item.price,0)

    return(
      <div className=" foodmenu col-5">
        <h1>Order</h1>
        <ul>{cart}</ul>
        {subtotal}
      </div>
    )
  }
}

export default Order;
