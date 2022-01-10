import React from "react";
import logo from "./images/logo.png"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      active: "/Home"
    };
  }
  toggler = (style, item, index) => {
    //toggle active nav item
    let myhref = "/"+item;
    let activeStyle = "py-4 px-2 text-green-700 border-b-4 border-red-700 font-semibold";
    let normalStyle = "py-4 px-2 text-gray-700 font-semibold hover:text-green-700 transition duration-300";
    let menuType = '';
    if (myhref === "/Home") {
      myhref = "/"
    }
    if (item.indexOf("Order") >= 0) {
      myhref="https://slicelife.com/restaurants/mi/mt-morris/48458/la-villa-family-dining-pizzeria/menu?utm_campaign=order_now_button&utm_medium=referral&utm_source=lavilla-pizzeria.com"
    }
    if (style === "mobile") {
      menuType = 'mobile';
      activeStyle = "block text-sm px-2 py-4 text-white bg-green-700 font-semibold";
      normalStyle = "block text-sm px-2 py-4 hover:bg-green-700 hover:text-white transition duration-300";
    }
    const activeLink = <a href={myhref} key={index} className={activeStyle} onClick={() => {this.handleClick({menuType}, item, index)}}>{item}</a>;
    const inactiveLink = <a href={myhref} key={index} className={normalStyle} onClick={() => {this.handleClick({menuType}, item, index)}}>{item}</a>;

    if (this.state.active === "/") {
      if (item === "Home") {
        return activeLink;
      } else { return inactiveLink;}
    } else if (item.indexOf(' ') >= 0) {
      if ("/"+item.replace(' ', '%20') === this.state.active) {
        return activeLink;
      } else {return inactiveLink;}
    }
    else if ("/"+item === this.state.active){
      return activeLink;
    } else {
      return inactiveLink;
    }
  }

  handleClick = (menuType='', item='', index=undefined) => {
    //toggle mobile menu
    const btn = document.getElementById("nav-button");
    const menu = document.getElementById("mobile-menu");
    if (menuType === 'mobile') {
      menu.classList.toggle('hidden');
      btn.classList.toggle('hidden');
    }; 
    
  }
  componentDidMount() {
    this.setState({
      active: window.location.pathname
    })
  }

  render(){  
    const links = ["Home", "Menu", "Catering", "Careers", "Contact Us", "Order Delivery"];
    //const logo = "https://lh3.googleusercontent.com/pw/AM-JKLVa48I5m5Vgg26NKgWMHI1NZHIEt72VCjljIQxdwVRuEcLEKpFFwcGHkV8hnkttC5BtcjaR2fvVaPmoslAvJBcPprhGDrXm-D3Bkdc1LkKsMjOQnw3drO1-41NdDKvpeC0x6ei9FK7NN7ewNZ41tlJk=w119-h80-no?authuser=0"
    return(
    <nav className='sticky bg-opacity-0 top-0 z-50 bg-white flex justify-between px-20'>
          <div>
            <a href="/" className="flex items-center">
                <span className="">
                  <img alt="An image of the La Villa logo" src={logo} />
                </span>
            </a>
          </div>
          <div className="hidden md:flex items-end space-x-1">
              {links.map((item, index) => (this.toggler("standard", item, index)))}
            </div>
        <div className="md:hidden flex items-center">
          <button name="hamburger menu" id="nav-button" className="outline-none mobile-menu-button" onClick={() => {this.handleClick("mobile")}}>
            <svg className="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" className="hidden mobile-menu">
          <ul className="">
          {links.map((item, index) => (this.toggler("mobile", item, index)))}

          </ul>
        </div>
    </nav>
  );}
}

export default Header;