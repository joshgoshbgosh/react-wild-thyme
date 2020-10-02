import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: "src",
    }
  }

render () {
  return (

    <header>
        <image src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1464510226000/photosp/6688cf94-ac92-495c-8c59-ddc8455790e8/stock-photo-food-decoration-pattern-business-black-and-white-restaurant-food-and-drink-art-fork-6688cf94-ac92-495c-8c59-ddc8455790e8.jpg" roundedCircle />
        <h1>THE MUSIC CAFE</h1>
        <button variant="outline-dark">HOME</button>
        <button variant="outline-dark">ABOUT</button>
    </header>
  )};
}


export default Header;
